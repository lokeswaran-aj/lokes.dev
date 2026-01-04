export type BlogPost = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  guid: string;
};

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch("/api/rss");

    if (!response.ok) {
      console.error(`[RSS] Failed to fetch: ${response.status}`);
      return [];
    }

    const posts = await response.json();
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error("[RSS] Error fetching posts:", error);
    return [];
  }
}

export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
