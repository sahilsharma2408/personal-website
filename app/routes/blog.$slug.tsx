import React from "react";
import { Link, useLoaderData, data } from "react-router";
import type { Route } from "./+types/blog.$slug";
import { getPostBySlug } from "~/lib/blog.server";

// Lazy load MDX files
const postComponents = import.meta.glob<{ default: React.ComponentType }>(
  "../content/blog/*.mdx"
);

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

export function meta({ data: loaderData }: Route.MetaArgs) {
  if (!loaderData?.post) {
    return [{ title: "Post Not Found | Sahil Sharma" }];
  }
  return [
    { title: `${loaderData.post.frontmatter.title} | Sahil Sharma` },
    { name: "description", content: loaderData.post.frontmatter.description },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const post = getPostBySlug(params.slug!);
  if (!post) throw data(null, { status: 404 });
  return { post };
}

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();

  const PostContent = React.lazy(
    () =>
      postComponents[`../content/blog/${post.slug}.mdx`]() as Promise<{
        default: React.ComponentType;
      }>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Back link */}
      <Link
        to="/blog"
        className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        All posts
      </Link>

      {/* Post header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          {post.frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
          <time dateTime={post.frontmatter.date}>
            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.frontmatter.readTime}</span>
        </div>

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
      </header>

      <hr className="border-gray-800 mb-10" />

      {/* MDX content */}
      <React.Suspense
        fallback={
          <div className="text-gray-500 py-8">Loading article...</div>
        }
      >
        <article className="prose prose-gray dark:prose-invert prose-lg max-w-none prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800">
          <PostContent />
        </article>
      </React.Suspense>

      {/* Newsletter CTA */}
      <div className="mt-16 p-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Enjoyed this article?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Subscribe to get notified when I publish new posts. No spam, unsubscribe anytime.
        </p>
        <Link
          to="/newsletter"
          className="inline-flex items-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Subscribe to newsletter
        </Link>
      </div>
    </div>
  );
}
