import { createClient, groq } from "next-sanity";
import { Project } from "@/sanity/types/Project";
import { Page } from "@/sanity/types/Page";
import { Post } from "@/sanity/types/Post";

import client from "@/client";


export async function getProjects(): Promise<Project[]> {
  return createClient(client).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(client).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

export async function getPages(): Promise<Page[]> {
  return createClient(client).fetch(
    groq`*[_type == "page"]{
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

export async function getPosts(): Promise<Post[]> {
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
  
  export async function getPost(slug: string): Promise<Post> {
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