import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getAllPosts } from "~/lib/blog.server";

const ALL_TAGS = ["All", "React", "Cloudflare", "TypeScript", "Productivity"];

const TAG_COLORS: Record<string, string> = {
  React: "bg-blue-500/20 text-blue-400",
  "React Router": "bg-blue-500/20 text-blue-400",
  TypeScript: "bg-sky-500/20 text-sky-400",
  Cloudflare: "bg-orange-500/20 text-orange-400",
  DevOps: "bg-green-500/20 text-green-400",
  Productivity: "bg-purple-500/20 text-purple-400",
  Tools: "bg-yellow-500/20 text-yellow-400",
  "Developer Experience": "bg-pink-500/20 text-pink-400",
};

export function meta() {
  return [
    { title: "Blog | Sahil Sharma" },
    {
      name: "description",
      content:
        "Thoughts on web development, React, and building things.",
    },
  ];
}

export async function loader() {
  return { posts: getAllPosts() };
}

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts =
    activeTag === "All"
      ? posts
      : posts.filter((post) =>
          post.frontmatter.tags.some((tag) =>
            tag.toLowerCase().includes(activeTag.toLowerCase())
          )
        );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-400">
          Thoughts on web development, React, and building things.
        </p>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeTag === tag
                ? "bg-primary text-white"
                : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Post list */}
      {filteredPosts.length > 0 ? (
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                <time dateTime={post.frontmatter.date}>
                  {new Date(post.frontmatter.date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.frontmatter.readTime}</span>
              </div>

              <Link to={`/blog/${post.slug}`} className="block mb-3">
                <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-primary transition-colors">
                  {post.frontmatter.title}
                </h2>
              </Link>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {post.frontmatter.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      TAG_COLORS[tag] || "bg-gray-700/50 text-gray-400"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            No posts found for "{activeTag}".
          </p>
          <button
            onClick={() => setActiveTag("All")}
            className="mt-4 text-primary hover:underline"
          >
            View all posts
          </button>
        </div>
      )}
    </div>
  );
}
