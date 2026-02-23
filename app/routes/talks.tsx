import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Talks - Sahil Sharma" },
  {
    name: "description",
    content:
      "Conference talks and meetup presentations by Sahil Sharma on React, TypeScript, and modern web development.",
  },
];

const talks = [
  {
    title: "Modern Full-Stack Development with React Router v7",
    event: "React Conf India 2024",
    date: "November 2024",
    description:
      "A deep dive into React Router v7's new paradigm for full-stack React apps, covering SSR, data loading, and Cloudflare edge deployment.",
    slides: "#",
    video: "#",
  },
  {
    title: "Testing React Applications in 2024",
    event: "JSConf Asia 2024",
    date: "September 2024",
    description:
      "Practical strategies for testing React apps with Vitest and Playwright. From unit tests to end-to-end, building confidence in your codebase.",
    slides: "#",
    video: null,
  },
  {
    title: "TypeScript Patterns for React Developers",
    event: "TypeScript India Meetup",
    date: "June 2024",
    description:
      "Practical TypeScript patterns that make React development safer and more enjoyable. Covers generics, discriminated unions, and utility types.",
    slides: "#",
    video: "#",
  },
];

export default function Talks() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Page Header */}
      <header>
        <h1 className="text-4xl font-bold text-white">Talks</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Sharing knowledge at conferences and meetups
        </p>
      </header>

      {/* Intro */}
      <section className="mt-12">
        <p className="text-gray-300 leading-relaxed max-w-2xl">
          I enjoy sharing what I've learned with the developer community. Whether
          it's a conference stage or a local meetup, I find that teaching a topic
          is one of the best ways to deepen my own understanding — and the
          conversations that follow are always the highlight.
        </p>
      </section>

      {/* Talk List */}
      <div className="mt-12 space-y-6">
        {talks.map((talk) => (
          <div
            key={talk.title}
            className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 border-l-4 border-l-blue-500"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <span>{talk.event}</span>
              <span className="text-gray-600">&middot;</span>
              <time>{talk.date}</time>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {talk.title}
            </h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              {talk.description}
            </p>
            <div className="mt-4 flex gap-3">
              {talk.slides && (
                <a
                  href={talk.slides}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 hover:border-gray-500 hover:text-white transition-colors"
                >
                  Slides
                </a>
              )}
              {talk.video && (
                <a
                  href={talk.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 hover:border-gray-500 hover:text-white transition-colors"
                >
                  Video
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-16 rounded-2xl border border-gray-800 bg-gray-900/60 p-8 sm:p-12 text-center">
        <h2 className="text-2xl font-bold text-white">
          Want me to speak at your event?
        </h2>
        <p className="mt-3 text-gray-400 max-w-md mx-auto">
          I'd love to hear about it. Drop me a line and let's make it happen.
        </p>
        <a
          href="mailto:sahilsharma2408@gmail.com"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
        >
          Get in touch
        </a>
      </section>
    </div>
  );
}
