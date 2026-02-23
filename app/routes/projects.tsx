import type { MetaFunction } from "react-router";
import { projects } from "~/data/projects";

export const meta: MetaFunction = () => [
  { title: "Projects - Sahil Sharma" },
  {
    name: "description",
    content:
      "Projects and work by Sahil Sharma — design systems, micro-frontend platforms, and AI-integrated developer tooling.",
  },
];

const TAG_COLORS: Record<string, string> = {
  "React Router": "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400",
  React: "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400",
  Tailwind: "bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400",
  Cloudflare: "bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400",
  MDX: "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400",
  TypeScript: "bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400",
  "Node.js": "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400",
  "Webpack 5": "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400",
  Turborepo: "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400",
  "GitHub Actions": "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300",
  Storybook: "bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400",
  Sentry: "bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-400",
  MCP: "bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-400",
};

export default function Projects() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <header>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Projects</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Things I've built
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10" />

              <div className="relative">
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">{project.name}</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        TAG_COLORS[tag] || "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/sahilsharma2408"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
          >
            More on GitHub &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
