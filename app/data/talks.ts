export interface Talk {
  title: string;
  event: string;
  eventUrl: string | null;
  date: string;
  description: string;
  tags: string[];
  youtubeUrl: string | null;
  slidesUrl: string | null;
}

export const talks: Talk[] = [
  {
    title: "Building Design Systems That Scale: From Monorepo to 15+ Teams",
    event: "React Conf India 2024",
    eventUrl: null,
    date: "November 2024",
    description:
      "How to architect a component library adopted by 15+ product teams — from Turborepo/Lerna monorepo setup and Storybook-driven development to automated ESLint/Stylelint/Prettier quality gates via GitHub Actions. Real numbers: 30% dev productivity gain, 65% fewer UI bugs.",
    tags: ["react", "dx", "performance"],
    youtubeUrl: null,
    slidesUrl: null,
  },
  {
    title: "Micro-Frontend Architecture with Webpack 5 Module Federation",
    event: "JSConf Asia 2024",
    eventUrl: null,
    date: "September 2024",
    description:
      "Real-world lessons from building a micro-frontend platform supporting 20+ independent applications — independent deployments, version rollback, and the Module Federation patterns that actually work in production.",
    tags: ["react", "performance"],
    youtubeUrl: null,
    slidesUrl: null,
  },
  {
    title: "Model Context Protocol: Bridging Design Systems & AI Dev Environments",
    event: "AI Engineering Summit 2024",
    eventUrl: null,
    date: "July 2024",
    description:
      "A practical look at building an MCP server that exposes your design system as an executable knowledge base for AI coding assistants — making component discovery, usage patterns, and design tokens first-class citizens in AI-assisted development.",
    tags: ["dx", "typescript"],
    youtubeUrl: null,
    slidesUrl: null,
  },
  {
    title: "60% Bundle Size Reduction: A Webpack Optimisation Deep Dive",
    event: "DevFest 2023",
    eventUrl: null,
    date: "December 2023",
    description:
      "Practical techniques that cut the email editor bundle by 60% and achieved 85% faster page loads — Webpack Module Federation, Brotli compression, advanced code splitting, and the profiling workflow that finds the real bottlenecks.",
    tags: ["performance", "dx"],
    youtubeUrl: null,
    slidesUrl: null,
  },
  {
    title: "JSON-Driven UI: Building a Contact Segmentation Engine",
    event: "ReactIndia 2022",
    eventUrl: null,
    date: "September 2022",
    description:
      "How to build a JSON-driven UI builder that handles 10K+ monthly queries at under 100ms — schema design, plugin architecture for contact-sync operations, and the trade-offs between flexibility and performance.",
    tags: ["react", "typescript"],
    youtubeUrl: null,
    slidesUrl: null,
  },
];
