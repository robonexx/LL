import type { PortableTextBlock } from "@portabletext/types";

export type Lockers = {
    name: string;
  aka: string;
  description?: PortableTextBlock[] | string;
  href: string;
  url?: string;
  img: string;
  id: string;
}