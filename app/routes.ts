import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("blog", "routes/blog._index.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  route("projects", "routes/projects.tsx"),
  route("talks", "routes/talks.tsx"),
  route("newsletter", "routes/newsletter.tsx"),
  route("unsubscribe", "routes/unsubscribe.tsx"),
  route("admin/subscribers", "routes/admin.subscribers.tsx"),
] satisfies RouteConfig;
