import type { PortableTextBlock } from "@portabletext/types";

import { Author } from "./Author";

export type PostType = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    image: string;
    url?: string;
    categories?: [];
    author: Author;
    body: PortableTextBlock[];
}