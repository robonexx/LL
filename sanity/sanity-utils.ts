import { createClient, groq } from "next-sanity";
import { Page } from "@/sanity/types/Page";
import { PostType } from "@/sanity/types/Post";

import client from "@/client"

export async function getPages(): Promise<Page[]> {
  return createClient(client).fetch(
    groq`*[_type == "pagest"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(client).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
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