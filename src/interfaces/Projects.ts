export interface Tag {
  name: string;
  icon: any;
  class?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: Tag[];
  link?: string;
  image?: string;
}
