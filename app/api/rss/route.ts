import { NextRequest, NextResponse } from "next/server";
import Parser from "rss-parser";
import type { BlogPost } from "@/lib/rss";

export const dynamic = "force-dynamic";

const BLOG_FEED_URL = "https://blog.lokes.dev/rss.xml";
const parser = new Parser();

let cachedData: { posts: BlogPost[]; timestamp: number } | null = null;
const CACHE_DURATION = 60 * 60 * 1000;

function invalidateCache() {
  console.log("[RSS] Cache invalidated");
  cachedData = null;
}

export async function GET() {
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    console.log("[RSS] Returning cached data");
    return NextResponse.json(cachedData.posts);
  }

  console.log("[RSS] Fetching blog feed...");

  try {
    const response = await fetch(BLOG_FEED_URL, {
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      throw new Error(`Blog feed returned HTTP ${response.status}`);
    }

    const feed = await parser.parseString(await response.text());
    const posts: BlogPost[] = feed.items.slice(0, 10).map((item) => {
      if (!item.title || !item.link) {
        throw new Error("Blog feed item is missing its title or link");
      }
      return {
        title: item.title,
        description: item.contentSnippet || item.summary || "",
        link: item.link,
        pubDate: item.isoDate || item.pubDate || "",
        guid: item.guid || item.link,
      };
    });

    console.log(`[RSS] Fetched ${posts.length} posts`);

    cachedData = { posts, timestamp: Date.now() };

    return NextResponse.json(posts);
  } catch (error) {
    console.error("[RSS] Error:", error);

    if (cachedData) {
      console.log("[RSS] Error, returning stale cache");
      return NextResponse.json(cachedData.posts);
    }

    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 502 }
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
