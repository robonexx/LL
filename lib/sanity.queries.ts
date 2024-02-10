import { createClient, groq } from "next-sanity";
import { PageType } from "@/sanity/types/Page";
import { PostType } from "@/sanity/types/Post";

import client from "@/client"
import { constants } from "fs/promises";


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
      "slug": slug.current,
      content
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
      "image": image.asset->url,
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
      "image": image.asset->url,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)][0..5] {
    _id,
    _createdAt,
    title,
    categories,
    "slug": slug.current,
    "image": image.asset->url,
    "author": author->{name, picture},
    body
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    _id,
        _createdAt,
        title,
        categories,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        "author": author->{name, picture},
        body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export async function getPosts(): Promise<PostType[]> {
    return createClient(client).fetch(
      groq`*[_type == "post"]{
        _id,
        _createdAt,
        title,
        categories,
        "slug": slug.current,
        "image": image.asset->url,
        "author": author->{name, picture},
        body
      }`
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