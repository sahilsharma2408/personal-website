export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
}

export const projects: Project[] = [
  {
    name: "Modular Email Ecosystem & AI Platform",
    description:
      "Drag-and-drop email editor built with Pragmatic Drag & Drop — 50+ reusable components, responsive renderer with real-time style hooks, and 60% bundle size reduction via Webpack MF + Brotli compression. Includes a custom MCP server bridging design systems with AI dev environments.",
    tags: ["React", "TypeScript", "Webpack 5", "MCP", "Sentry"],
    github: "https://github.com/sahilsharma2408",
    live: null,
  },
  {
    name: "Enterprise Design System",
    description:
      "Component library adopted by 15+ product teams. Architected as a Lerna/Turborepo monorepo with GitHub Packages distribution, automated code quality via ESLint/Stylelint/Prettier GitHub Actions, and Storybook-driven development — driving 30% dev productivity gains and 65% fewer UI bugs.",
    tags: ["React", "TypeScript", "Storybook", "Turborepo", "GitHub Actions"],
    github: "https://github.com/sahilsharma2408",
    live: null,
  },
  {
    name: "Micro-Frontend Platform",
    description:
      "Pioneered a micro-frontend framework supporting 20+ independent applications with Webpack 5 Module Federation, enabling independent deployments and version rollback. Includes a JSON-driven UI builder handling 10K+ monthly queries at <100ms response time and a plugin system for contact-sync operations.",
    tags: ["React", "Webpack 5", "TypeScript", "Node.js"],
    github: "https://github.com/sahilsharma2408",
    live: null,
  },
  {
    name: "Personal Website",
    description:
      "This very site — built with React Router v7, Tailwind CSS v4, and MDX. Deployed on Cloudflare Pages with dark mode, MDX blog, and full TypeScript support.",
    tags: ["React Router", "Tailwind", "Cloudflare", "MDX"],
    github: "https://github.com/sahilsharma2408/personal-website",
    live: "https://sahilsharma2408.netlify.app",
  },
];
