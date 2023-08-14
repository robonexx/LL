// ./nextjs-app/sanity/lib/client.ts

// Add react cache import
import { cache } from "react"

// other imports and createClient

// Add cachedClient export

import { createClient } from "next-sanity"

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // your project id
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2023-08-13"
export const useCdn = false

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
})
  
export const cachedClient = cache(sanityClient.fetch.bind(sanityClient))
  