import { PortableTextBlock } from "sanity";

import { Author } from "./Author";

export type Post = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    image: string;
    url: string;
    categories?: [];
    author: Author;
    body: PortableTextBlock[];
}