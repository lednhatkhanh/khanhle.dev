interface Frontmatter {
  date: string;
  path: string;
  title: string;
}

interface Fields {
  slug: string;
}

export interface NodeData {
  id: string;
  excerpt: string;
  frontmatter: Frontmatter;
  fields: Fields;
  html: string;
}

export interface PostModel {
  node: NodeData;
}
