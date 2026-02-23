import { Form, useActionData } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Newsletter - Sahil Sharma" },
  {
    name: "description",
    content:
      "Subscribe to Sahil Sharma's newsletter for articles on React, TypeScript, and modern web development.",
  },
];

export async function action() {
  return { success: true };
}

const benefits = [
  "New blog posts delivered to your inbox",
  "Curated links and resources I find useful",
  "Updates on my talks and projects",
  "Occasional thoughts on developer productivity",
];

const pastIssues = [
  {
    title: "What's new in React Router v7",
    date: "December 2024",
    href: "#",
  },
  {
    title: "My favorite developer tools of 2024",
    date: "November 2024",
    href: "#",
  },
  {
    title: "Getting started with Cloudflare Workers",
    date: "October 2024",
    href: "#",
  },
];

export default function Newsletter() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Page Header */}
      <header>
        <h1 className="text-4xl font-bold text-white">Newsletter</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">Stay in the loop</p>
      </header>

      {/* Description */}
      <section className="mt-12">
        <p className="text-gray-300 leading-relaxed max-w-2xl">
          I write about React, TypeScript, web development, and the tools that
          make us better developers. No spam, unsubscribe anytime.
        </p>
      </section>

      {/* What you'll get */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">What you'll get</h2>
        <ul className="mt-4 space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-gray-300">
              <span className="mt-0.5 text-blue-400 shrink-0">&#10003;</span>
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Signup Form */}
      <section className="mt-12 rounded-2xl border border-gray-800 bg-gray-900/60 p-8 sm:p-10">
        {actionData?.success ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">
              Thanks for subscribing!
            </h2>
            <p className="mt-3 text-gray-400">
              You'll receive the next issue in your inbox. Welcome aboard.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-white">Subscribe</h2>
            <p className="mt-2 text-sm text-gray-400">
              Join 500+ developers who get my newsletter.
            </p>
            <Form method="post" className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full sm:flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
              >
                Subscribe
              </button>
            </Form>
          </>
        )}
      </section>

      {/* Past Issues */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Past issues</h2>
        <div className="mt-6 space-y-4">
          {pastIssues.map((issue) => (
            <a
              key={issue.title}
              href={issue.href}
              className="group flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/50 p-5 hover:border-gray-700 transition-colors"
            >
              <div>
                <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                  {issue.title}
                </h3>
                <time className="mt-1 block text-sm text-gray-500">
                  {issue.date}
                </time>
              </div>
              <span className="text-gray-600 group-hover:text-blue-400 transition-colors">
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
