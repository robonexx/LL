/* import type { PortableTextBlock } from "@portabletext/types"; */

type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
  priority?: string
}

export type Lockers = {
    name: string;
  aka: string;
  description?: string;
  href: string;
  url?: string;
  img: string | StaticImageData;
  id: string;
}