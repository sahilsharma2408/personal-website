declare module "*.mdx" {
  import type { ComponentProps, ComponentType } from "react";
  const component: ComponentType<ComponentProps<"div">>;
  export default component;
  export const frontmatter: Record<string, unknown>;
}
