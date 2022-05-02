export interface Iopen {
  open: boolean;
}

export interface Ipost {
  slug: string;
  frontmatter: Ifrontmatter;
}

export interface Ifrontmatter {
  title: string;
  date: Date;
  excerpt: string;
  cover_image: string;
}

export interface IpostPage {
  frontmatter: Ifrontmatter;
  slug: string;
  content: string;
}
