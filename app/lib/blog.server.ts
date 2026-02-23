// Use Vite's glob import to get all MDX files at build time
// This works with Cloudflare Pages since it's resolved statically

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
  published: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
}

// Use import.meta.glob to eagerly get frontmatter from all MDX files
const postModules = import.meta.glob<{ frontmatter: PostFrontmatter }>(
  "../content/blog/*.mdx",
  { eager: true }
);

export function getAllPosts(): Post[] {
  return Object.entries(postModules)
    .map(([path, mod]) => {
      const slug = path.replace("../content/blog/", "").replace(".mdx", "");
      return {
        slug,
        frontmatter: mod.frontmatter,
      };
    })
    .filter((post) => post.frontmatter.published)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
