interface Frontmatter {
  date: string;
  path: string;
  title: string;
}

interface NodeData {
  id: string;
  excerpt: string;
  frontmatter: Frontmatter;
}

export interface PostModel {
  node: NodeData;
}
