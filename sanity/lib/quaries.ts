import { groq } from "next-sanity";

export const getPages = groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`

export const getPage = groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "image": image.asset->url,
      "slug": slug.current,
      content[]{
        ...,       
      }
    }`


export const getPosts = groq`*[_type == "post"]| order(publishDate desc){
        _id,
        _createdAt,
        title,
        categories,
        "slug": slug.current,
        "image": image.asset->url,
        "author": author->{name, picture},
        body
      }[0...5]`
  
  export const getPost = groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        categories,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        "author": author->{name, picture},
        body
      }`


      // Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

  export const pagePathsQuery = groq`*[_type == "page" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;