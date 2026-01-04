"use client";

import BackButton from "@/components/ui/BackButton";
import Heading from "@/components/ui/Heading";
import Icons from "@/components/ui/Icons";
import { fetchBlogPosts, formatDate, type BlogPost } from "@/lib/rss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <BackButton link={"/"} />
      <Heading text="Read my blogs" />
      <p className="text-muted text-sm mb-6">
        Posts from{" "}
        <Link
          href="https://blog.lokes.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          blog.lokes.dev
        </Link>
      </p>

      {loading ? (
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="animate-pulse space-y-2">
              <div className="h-5 bg-muted/20 rounded w-3/4"></div>
              <div className="h-4 bg-muted/20 rounded w-full"></div>
              <div className="h-3 bg-muted/20 rounded w-24"></div>
            </div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="text-muted">No posts yet. Check back soon!</p>
      ) : (
        posts.map((post) => (
          <Link
            key={post.guid}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group flex flex-col p-2 -m-2 space-y-1 mb-4">
              <div className="flex items-center gap-2">
                <h4 className="group-hover:underline underline-offset-2">
                  {post.title}
                  <Icons.arrow />
                </h4>
              </div>
              <p className="text-muted line-clamp-2 text-ellipsis no-underline hover:no-underline">
                {post.description}
              </p>
              <span className="text-xs text-muted/70">
                {formatDate(post.pubDate)}
              </span>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
