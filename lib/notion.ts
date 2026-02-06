const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

export interface NotionPage {
  id: string;
  title: string;
  slug: string;
  type: "Project" | "Blog" | "Experience";
  published: boolean;
  summary: string;
  tags: string[];
  coverImage: string;
  date: string;
}

export async function getNotionPages(type?: "Project" | "Blog" | "Experience"): Promise<NotionPage[]> {
  if (!NOTION_TOKEN || !DATABASE_ID) {
    console.error("Missing Notion credentials in environment variables");
    return [];
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: type ? {
          property: "Type",
          select: {
            equals: type
          }
        } : undefined
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Notion API Error:", error);
      return [];
    }

    const data = await response.json();
    return data.results.map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
        title: props.Name?.title[0]?.plain_text || "Untitled",
        slug: props.Slug?.rich_text[0]?.plain_text || "",
        type: props.Type?.select?.name as any || "Project",
        published: props.Published?.checkbox || false,
        summary: props.Summary?.rich_text[0]?.plain_text || "",
        tags: props.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        coverImage: props["Cover Image"]?.url || "",
        date: props.Date?.date?.start || "",
      };
    });
  } catch (error) {
    console.error("Failed to fetch Notion pages:", error);
    return [];
  }
}

export async function getNotionPageBySlug(slug: string): Promise<NotionPage | null> {
  if (!NOTION_TOKEN || !DATABASE_ID) {
    console.error("Missing Notion credentials in environment variables");
    return null;
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          property: "Slug",
          rich_text: {
            equals: slug
          }
        }
      })
    });

    if (!response.ok) return null;

    const data = await response.json();
    if (data.results.length === 0) return null;

    const page = data.results[0];
    const props = page.properties;
    return {
      id: page.id,
      title: props.Name?.title[0]?.plain_text || "Untitled",
      slug: props.Slug?.rich_text[0]?.plain_text || "",
      type: props.Type?.select?.name as any || "Project",
      published: props.Published?.checkbox || false,
      summary: props.Summary?.rich_text[0]?.plain_text || "",
      tags: props.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      coverImage: props["Cover Image"]?.url || "",
      date: props.Date?.date?.start || "",
    };
  } catch (error) {
    console.error("Failed to fetch Notion page by slug:", error);
    return null;
  }
}

export interface NotionBlock {
  id: string;
  type: string;
  content: string;
}

export async function getNotionPageBlocks(pageId: string): Promise<NotionBlock[]> {
  if (!NOTION_TOKEN) {
    console.error("Missing Notion token");
    return [];
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/blocks/${pageId}/children`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch blocks");
      return [];
    }

    const data = await response.json();
    return data.results.map((block: any) => {
      let content = "";
      
      // Extract text content based on block type
      if (block.type === "paragraph" && block.paragraph?.rich_text) {
        content = block.paragraph.rich_text.map((t: any) => t.plain_text).join("");
      } else if (block.type === "heading_1" && block.heading_1?.rich_text) {
        content = "# " + block.heading_1.rich_text.map((t: any) => t.plain_text).join("");
      } else if (block.type === "heading_2" && block.heading_2?.rich_text) {
        content = "## " + block.heading_2.rich_text.map((t: any) => t.plain_text).join("");
      } else if (block.type === "heading_3" && block.heading_3?.rich_text) {
        content = "### " + block.heading_3.rich_text.map((t: any) => t.plain_text).join("");
      } else if (block.type === "bulleted_list_item" && block.bulleted_list_item?.rich_text) {
        content = "- " + block.bulleted_list_item.rich_text.map((t: any) => t.plain_text).join("");
      } else if (block.type === "numbered_list_item" && block.numbered_list_item?.rich_text) {
        content = "1. " + block.numbered_list_item.rich_text.map((t: any) => t.plain_text).join("");
      } else if (block.type === "code" && block.code?.rich_text) {
        const code = block.code.rich_text.map((t: any) => t.plain_text).join("");
        content = "```\n" + code + "\n```";
      }

      return {
        id: block.id,
        type: block.type,
        content,
      };
    });
  } catch (error) {
    console.error("Failed to fetch Notion blocks:", error);
    return [];
  }
}
