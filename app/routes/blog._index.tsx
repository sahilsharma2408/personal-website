import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getAllPosts } from "~/lib/blog.server";

const ALL_TAGS = ["All", "Design Systems", "Performance", "Cloudflare", "React", "DevOps"];

const TAG_COLORS: Record<string, string> = {
  React: "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400",
  "React Router": "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400",
  TypeScript: "bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400",
  Cloudflare: "bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400",
  DevOps: "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400",
  Frontend: "bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-400",
  Performance: "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400",
  "Design Systems": "bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-400",
  Analytics: "bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-400",
  Productivity: "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function meta() {
  return [
    { title: "Blog | Sahil Sharma" },
    {
      name: "description",
      content:
        "Writing on design systems, frontend architecture, performance, and developer experience.",
    },
  ];
}

export async function loader() {
  return { posts: getAllPosts() };
}

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = posts.filter((post) => {
    const matchesTag =
      activeTag === "All" ||
      post.frontmatter.tags.some((t) =>
        t.toLowerCase().includes(activeTag.toLowerCase())
      );
    const matchesQuery =
      query.trim() === "" ||
      post.frontmatter.title.toLowerCase().includes(query.toLowerCase()) ||
      post.frontmatter.description.toLowerCase().includes(query.toLowerCase());
    return matchesTag && matchesQuery;
  });

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Writing on design systems, frontend architecture, performance, and developer experience.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-5 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
          />
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeTag === tag
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"}
        </p>

        {/* Post list */}
        {filtered.length > 0 ? (
          <div className="space-y-1">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block rounded-2xl p-6 hover:bg-gray-50 dark:hover:bg-gray-900/60 transition-colors"
              >
                {/* Date + read time */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-2">
                  <time dateTime={post.frontmatter.date}>
                    {formatDate(post.frontmatter.date)}
                  </time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.frontmatter.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 leading-snug">
                  {post.frontmatter.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {post.frontmatter.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        TAG_COLORS[tag] ||
                        "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No articles match "{activeTag !== "All" ? activeTag : query}".
            </p>
            <button
              onClick={() => {
                setActiveTag("All");
                setQuery("");
              }}
              className="mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
