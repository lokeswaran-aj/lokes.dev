export type BlogPost = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  guid: string;
};

export async function fetchBlogPosts(signal?: AbortSignal): Promise<BlogPost[]> {
  const response = await fetch("/api/rss", { signal });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog posts: HTTP ${response.status}`);
  }

  const posts = await response.json();
  if (!Array.isArray(posts)) {
    throw new Error("Invalid blog posts response");
  }
  return posts;
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
