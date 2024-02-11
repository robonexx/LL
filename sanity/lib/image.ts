import React from 'react'
import {client} from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  console.log('from url for image: ',source)
  return builder.image(source)
}