import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "About - Sahil Sharma" },
  {
    name: "description",
    content:
      "Learn more about Sahil Sharma — software engineer passionate about building great developer experiences and web applications.",
  },
];

const skills = [
  "TypeScript",
  "React",
  "React Router",
  "Node.js",
  "Cloudflare Workers",
  "Tailwind CSS",
  "PostgreSQL",
  "Git",
  "Vite",
  "Vitest",
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Page Header */}
      <header>
        <h1 className="text-4xl font-bold text-white">About Me</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Software engineer passionate about building great developer
          experiences and web applications.
        </p>
      </header>

      {/* Profile */}
      <section className="mt-12 flex flex-col sm:flex-row items-start gap-8">
        <div className="shrink-0 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-3xl font-bold text-white select-none">
          SS
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Sahil Sharma</h2>
          <p className="mt-1 text-gray-400">Software Engineer</p>
          <p className="mt-0.5 text-gray-500">India</p>
        </div>
      </section>

      <hr className="my-12 border-gray-800" />

      {/* Bio */}
      <section className="space-y-5 text-gray-300 leading-relaxed">
        <p>
          I'm a software engineer who loves building for the web. Most of my
          work revolves around the React ecosystem — from single-page apps to
          full-stack applications powered by React Router and server-side
          rendering. I care deeply about the details: fast page loads, smooth
          interactions, and code that's a pleasure to work with.
        </p>
        <p>
          Open source has shaped the way I think about software. Contributing to
          projects and learning from the community taught me that the best tools
          are the ones built in the open, with real feedback from real
          developers. I try to give back whenever I can, whether that's through
          code contributions, writing, or sharing what I've learned at
          conferences.
        </p>
        <p>
          When I'm not writing code, I'm usually reading about developer tooling
          and thinking about what makes a great developer experience. I believe
          the best software comes from teams that invest in their tools, and I'm
          always looking for ways to make the development process faster and more
          enjoyable.
        </p>
      </section>

      <hr className="my-12 border-gray-800" />

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold text-white">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-700 bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <hr className="my-12 border-gray-800" />

      {/* What I'm working on */}
      <section>
        <h2 className="text-2xl font-semibold text-white">
          What I'm working on
        </h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Right now I'm focused on building personal projects with React Router
          v7 and Cloudflare, writing articles about the tools and patterns I use
          every day, and contributing to open-source projects that make web
          development better. I'm also exploring edge computing and how it
          changes the way we think about deploying web applications.
        </p>
      </section>

      <hr className="my-12 border-gray-800" />

      {/* Connect */}
      <section>
        <h2 className="text-2xl font-semibold text-white">Connect</h2>
        <p className="mt-4 text-gray-400">
          Feel free to reach out — I'm always happy to chat about web
          development, open source, or anything else.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/sahilsharma2408"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 hover:border-gray-500 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/sahilsharma2408"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 hover:border-gray-500 hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/sahilsharma2408"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 hover:border-gray-500 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
