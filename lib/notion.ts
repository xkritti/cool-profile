import { PageObjectResponse, PartialPageObjectResponse, DatabaseObjectResponse, PartialDatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// This is a mock Notion API client for local development.
// In a real application, this would interact with the actual Notion API.
// It provides mock data for Projects, Blog Posts, and Experiences.

interface NotionPage {
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

const mockPages: NotionPage[] = [
  {
    id: "mock-project-1",
    title: "DeFi Exchange Pro",
    slug: "defi-exchange-pro",
    type: "Project",
    published: true,
    summary: "A decentralized exchange interface featuring real-time swaps, liquidity pools, and advanced charting.",
    tags: ["Next.js", "Web3.js", "Tailwind"],
    coverImage: "https://images.unsplash.com/photo-1639757657908-16e7f8e3f4f1?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-01-15",
  },
  {
    id: "mock-blog-1",
    title: "The Future of Web3 Development",
    slug: "future-of-web3",
    type: "Blog",
    published: true,
    summary: "Exploring the latest trends and challenges in building decentralized applications and the evolving Web3 ecosystem.",
    tags: ["Web3", "Blockchain", "Ethereum"],
    coverImage: "https://images.unsplash.com/photo-1639757657908-16e7f8e3f4f1?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2024-12-01",
  },
  {
    id: "mock-experience-1",
    title: "Senior Frontend Engineer @ TechCompany A",
    slug: "senior-frontend-engineer-techco",
    type: "Experience",
    published: true,
    summary: "Led a team in migrating legacy systems to a modern Next.js stack, improving performance and developer experience.",
    tags: ["Next.js", "React", "TypeScript"],
    coverImage: "https://images.unsplash.com/photo-1639757657908-16e7f8e3f4f1?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2022-05-01",
  },
];

export async function getNotionPages(type?: "Project" | "Blog" | "Experience"): Promise<NotionPage[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (type) {
    return mockPages.filter(page => page.type === type);
  }
  return mockPages;
}

export async function getNotionPageBySlug(slug: string): Promise<NotionPage | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockPages.find(page => page.slug === slug) || null;
}

// In a real application, you'd also have functions for:
// - Initializing Notion client with API key
// - Mapping Notion API responses to NotionPage interface
// - Handling pagination for large databases
// - Error handling and retry logic

// For now, we'll keep it simple with mock data.
