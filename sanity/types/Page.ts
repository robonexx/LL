import { PortableTextBlock } from "sanity"

export type PageType = {
  _id: string,
  _createdAt: Date,
  title: string,
  slug: string,
  image?: string;
  content: PortableTextBlock[]
};