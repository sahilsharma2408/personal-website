import type { MetaFunction } from "react-router";
import { bio, currentWork, profile, skills, socials } from "~/data/about";

export const meta: MetaFunction = () => [
  { title: "About - Sahil Sharma" },
  {
    name: "description",
    content:
      "Learn more about Sahil Sharma — Frontend Architect with 5+ years building design systems, micro-frontend platforms, and AI-integrated developer tooling.",
  },
];

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Page Header */}
        <header>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">About Me</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            {profile.tagline}
          </p>
        </header>

        {/* Profile */}
        <section className="mt-12 flex flex-col sm:flex-row items-start gap-8 bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8">
          <div className="shrink-0 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl font-bold text-white select-none">
            SS
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">{profile.name}</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">{profile.title}</p>
            <p className="mt-0.5 text-gray-500 dark:text-gray-500">{profile.location}</p>
          </div>
        </section>

        <hr className="my-12 border-gray-200 dark:border-gray-800" />

        {/* Bio */}
        <section className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        <hr className="my-12 border-gray-200 dark:border-gray-800" />

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <hr className="my-12 border-gray-200 dark:border-gray-800" />

        {/* What I'm working on */}
        <section className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            What I'm working on
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">{currentWork}</p>
        </section>

        <hr className="my-12 border-gray-200 dark:border-gray-800" />

        {/* Connect */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Connect</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Feel free to reach out — I'm always happy to chat about web development, open source, or anything else.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="rounded-lg border border-gray-200 dark:border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
