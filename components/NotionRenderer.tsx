// This is a simplified NotionRenderer for mock data.
// In a real application, this would parse Notion block objects into React components.

interface NotionRendererProps {
  content: string; // For mock data, we'll just use a string summary
}

export function NotionRenderer({ content }: NotionRendererProps) {
  // In a real Notion renderer, you'd iterate through blocks and render different types.
  // For this mock, we'll just display the summary as a paragraph.
  return (
    <div className="prose prose-invert max-w-none text-zinc-300">
      <p>{content}</p>
      <h2 className="font-prompt text-3xl font-bold mt-10 mb-4 text-zinc-100">Mock Section Heading</h2>
      <p>This is a simulated longer content section. In a full Notion integration, this would render rich text, images, and other block types dynamically from your Notion page content.</p>
      <pre className="bg-zinc-900 p-4 rounded-lg overflow-x-auto">
        <code className="language-typescript">
          const greeting = "Hello, Notion CMS!";
          console.log(greeting);
        </code>
      </pre>
      <ul>
        <li>Mock list item 1</li>
        <li>Mock list item 2</li>
      </ul>
    </div>
  );
}
