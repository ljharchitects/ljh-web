export interface Iopen {
  open: boolean;
}

export interface Iposts {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
}
