import { NextRequest, NextResponse } from "next/server";

const HASHNODE_GQL_ENDPOINT = "https://gql.hashnode.com";
const BLOG_HOST = "blog.lokes.dev";

let cachedData: { posts: BlogPost[]; timestamp: number } | null = null;
const CACHE_DURATION = 60 * 60 * 1000;

function invalidateCache() {
  console.log("[Hashnode API] Cache invalidated");
  cachedData = null;
}

type BlogPost = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  guid: string;
};

const POSTS_QUERY = `
  query GetPosts($host: String!) {
    publication(host: $host) {
      posts(first: 10) {
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
            url
          }
        }
      }
    }
  }
`;

export async function GET() {
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    console.log("[Hashnode API] Returning cached data");
    return NextResponse.json(cachedData.posts);
  }

  console.log("[Hashnode API] Fetching from GraphQL API...");

  try {
    const response = await fetch(HASHNODE_GQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: POSTS_QUERY,
        variables: { host: BLOG_HOST },
      }),
    });

    console.log(`[Hashnode API] Response status: ${response.status}`);

    if (!response.ok) {
      if (response.status === 429 && cachedData) {
        console.log("[Hashnode API] Rate limited, returning stale cache");
        return NextResponse.json(cachedData.posts);
      }
      return NextResponse.json(
        { error: `Failed to fetch: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (data.errors) {
      console.error("[Hashnode API] GraphQL errors:", data.errors);
      if (cachedData) {
        return NextResponse.json(cachedData.posts);
      }
      return NextResponse.json({ error: "GraphQL error" }, { status: 500 });
    }

    const edges = data?.data?.publication?.posts?.edges || [];
    const posts: BlogPost[] = edges.map((edge: any) => ({
      title: edge.node.title || "",
      description: edge.node.brief || "",
      link: edge.node.url || `https://${BLOG_HOST}/${edge.node.slug}`,
      pubDate: edge.node.publishedAt || "",
      guid: edge.node.id || edge.node.slug,
    }));

    console.log(`[Hashnode API] Fetched ${posts.length} posts`);

    cachedData = { posts, timestamp: Date.now() };

    return NextResponse.json(posts);
  } catch (error) {
    console.error("[Hashnode API] Error:", error);

    if (cachedData) {
      console.log("[Hashnode API] Error, returning stale cache");
      return NextResponse.json(cachedData.posts);
    }

    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  if (searchParams.get("invalidate") === "true") {
    invalidateCache();
    return NextResponse.json({ success: true, message: "Cache invalidated" });
  }

  return NextResponse.json({ error: "Invalid request" }, { status: 400 });
}
