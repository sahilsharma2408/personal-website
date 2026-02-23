import { Link, useLoaderData } from "react-router";
import type { MetaFunction } from "react-router";
import { talks } from "~/data/talks";
import { getAllPosts } from "~/lib/blog.server";

export const meta: MetaFunction = () => [
  { title: "Sahil Sharma - Frontend Architect" },
  {
    name: "description",
    content:
      "Personal website of Sahil Sharma. Frontend Architect specializing in design systems, micro-frontends, and high-performance web applications.",
  },
];

export async function loader() {
  const recentPosts = getAllPosts().slice(0, 3);
  return { recentPosts };
}

const recentTalks = talks.slice(0, 2);

export default function Index() {
  const { recentPosts } = useLoaderData<typeof loader>();

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Hi, I'm Sahil Sharma
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Frontend Architect · Design Systems · Micro-Frontends · AI Tooling
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            to="/blog"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Read my blog
          </Link>
          <Link
            to="/projects"
            className="rounded-lg border border-gray-200 dark:border-gray-700 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            View projects
          </Link>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Recent Articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:shadow-md dark:hover:border-gray-700 transition-all"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <time>
                    {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-300">
                    {post.frontmatter.tags[0]}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.frontmatter.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {post.frontmatter.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Talks */}
      <section className="bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Recent Talks</h2>
          <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-800">
            {recentTalks.map((talk) => (
              <div key={talk.title} className="py-6 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{talk.event}</span>
                  <span className="text-gray-300 dark:text-gray-600">&middot;</span>
                  <time>{talk.date}</time>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {talk.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">{talk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/30 p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Stay in the loop</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Get articles, talks, and updates delivered to your inbox.
            </p>
            <form
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
              action="/newsletter"
              method="get"
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full sm:flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <Link
                to="/newsletter"
                className="w-full sm:w-auto rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition-colors text-center"
              >
                Subscribe
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
