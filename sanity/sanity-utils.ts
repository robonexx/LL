import { createClient, groq } from "next-sanity";
import { PageType } from "@/sanity/types/Page";
import { PostType } from "@/sanity/types/Post";

import client from "@/client"

export async function getPages(): Promise<PageType[]> {
  return createClient(client).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<PageType> {
  return createClient(client).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "image": image.asset->url,
      "slug": slug.current,
      content[]{
        ...,
        "image": image.asset->url,
      }
    }`,
    { slug }
  )
}
export async function getAllPages(): Promise<PageType[]> {
  return createClient(client).fetch(
    groq`*[_type == "simplePage"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getSinglePage(slug: string): Promise<PageType> {
  return createClient(client).fetch(
    groq`*[_type == "simplePage" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}

export async function getPosts(): Promise<PostType[]> {
    return createClient(client).fetch(
      groq`*[_type == "post"]| order(publishDate desc){
        _id,
        _createdAt,
        title,
        categories,
        "slug": slug.current,
        "image": image.asset->url,
        "author": author->{name, picture},
        body
      }[0...5]`
    )
  }
  
  export async function getPost(slug: string): Promise<PostType> {
    return createClient(client).fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        categories,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        "author": author->{name, picture},
        body
      }`,
      { slug }
    )
  }