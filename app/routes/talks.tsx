import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Talks | Sahil Sharma" },
  { name: "description", content: "Talks and presentations by Sahil Sharma at conferences and meetups." },
];

const TAG_COLORS: Record<string, string> = {
  react: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  testing: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  typescript: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  cloudflare: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  keynote: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  performance: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  dx: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
};

const talks = [
  {
    title: "Modern Full-Stack Development with React Router v7",
    event: "React Conf India 2024",
    eventUrl: "#",
    date: "November 2024",
    description: "A deep dive into React Router v7's new paradigm for full-stack React apps — covering file-based routing, server-side rendering, data loading patterns, and deployment to Cloudflare edge.",
    tags: ["react", "cloudflare"],
    youtubeUrl: null,
    slidesUrl: "#",
  },
  {
    title: "Testing React Applications in 2024",
    event: "JSConf Asia 2024",
    eventUrl: "#",
    date: "September 2024",
    description: "Practical strategies for testing React apps with Vitest and Playwright. From unit tests to end-to-end flows — building confidence without slowing down your team.",
    tags: ["testing", "react"],
    youtubeUrl: "#",
    slidesUrl: "#",
  },
  {
    title: "TypeScript Patterns for React Developers",
    event: "TypeScript India Meetup",
    eventUrl: "#",
    date: "June 2024",
    description: "Practical TypeScript patterns that make React development safer and more enjoyable — generics, discriminated unions, template literal types, and the utility types you'll actually use.",
    tags: ["typescript", "react"],
    youtubeUrl: "#",
    slidesUrl: "#",
  },
  {
    title: "Developer Experience Matters",
    event: "DevFest 2023",
    eventUrl: "#",
    date: "December 2023",
    description: "Why investing in developer experience pays dividends. Tooling, linting, testing infrastructure, and culture decisions that make teams fast and keep engineers happy.",
    tags: ["dx"],
    youtubeUrl: null,
    slidesUrl: "#",
  },
  {
    title: "Building for the Edge: Cloudflare Workers in Practice",
    event: "CloudNative Day 2023",
    eventUrl: "#",
    date: "October 2023",
    description: "Moving compute to the edge sounds great in theory — this talk covers the reality: cold starts, KV storage, D1 databases, and the gotchas you need to know before deploying.",
    tags: ["cloudflare", "performance"],
    youtubeUrl: "#",
    slidesUrl: "#",
  },
];

export default function Talks() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Talks
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          I enjoy sharing what I learn. Here are the talks and presentations I've given at conferences and meetups.
        </p>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">
          Want me to speak at your event?{" "}
          <a href="mailto:sahilsharma2408@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
            Get in touch.
          </a>
        </p>
      </div>

      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
        Showing all {talks.length} talks
      </p>

      <div className="divide-y divide-gray-100 dark:divide-gray-800/60">
        {talks.map((talk) => (
          <div key={talk.title} className="py-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {talk.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                  {talk.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <a href={talk.eventUrl} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
                    {talk.event}
                  </a>
                  <span className="mx-2 text-gray-300 dark:text-gray-700">·</span>
                  <time>{talk.date}</time>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {talk.description}
                </p>
              </div>

              <div className="flex sm:flex-col gap-2 shrink-0">
                {talk.youtubeUrl && (
                  <a href={talk.youtubeUrl} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Video
                  </a>
                )}
                {talk.slidesUrl && (
                  <a href={talk.slidesUrl} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    Slides
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
