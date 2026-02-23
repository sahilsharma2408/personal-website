import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Projects - Sahil Sharma" },
  {
    name: "description",
    content:
      "Projects and open-source work by Sahil Sharma — from personal tools to developer libraries.",
  },
];

const projects = [
  {
    name: "Personal Website",
    description:
      "This very site! Built with React Router v7, Tailwind CSS v4, and MDX. Deployed on Cloudflare Pages with automatic GitHub Actions deployment.",
    tags: ["React Router", "Tailwind", "Cloudflare", "MDX"],
    github: "#",
    live: "#",
  },
  {
    name: "Dev Blog Starter",
    description:
      "An open-source starter template for developers who want a fast, beautiful blog with MDX support. Built on Vite and React.",
    tags: ["React", "Vite", "MDX", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    name: "CLI Task Manager",
    description:
      "A command-line task management tool built with Node.js. Supports projects, priorities, due dates, and syncs to a JSON file.",
    tags: ["Node.js", "CLI", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    name: "React Component Library",
    description:
      "A small, focused collection of accessible React components styled with Tailwind CSS. Built with accessibility and composability in mind.",
    tags: ["React", "Tailwind", "Accessibility", "Storybook"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Page Header */}
      <header>
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Things I've built
        </p>
      </header>

      {/* Project Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group relative rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-colors hover:border-blue-500/40"
          >
            {/* Gradient glow on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-indigo-500/10" />

            <div className="relative">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 hover:border-gray-500 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More on GitHub */}
      <div className="mt-16 text-center">
        <a
          href="https://github.com/sahilsharma2408"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          More on GitHub &rarr;
        </a>
      </div>
    </div>
  );
}
