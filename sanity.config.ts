import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
/* import project from './sanity/Schemas/project-schema'
import blog from './sanity/Schemas/blog-schema'
import page from './sanity/Schemas/page-schema' */
import schemas from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET 
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION 


const config = defineConfig<any>({
    projectId: projectId,
    dataset: dataset,
    title: "ll",
    basePath: "/admin",
    apiVersion: apiVersion,
    plugins: [deskTool()],
    schema: {
        types: schemas
    },
})

export default config

/* const studioID = process.env.SANITY_STUDIO_ID

export const config = {
    projectId: 'iys8bmlh',
    dataset: "production",
    title: "ll",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: [
            {
                name: "blog",
                title: "Blogs",
                type: "document",
                fields: [
                    {
                        name: "name",
                        title: "Name",
                        type: "string",
                    },
                    {
                        name: "slug",
                        title: "Slug",
                        type: "slug",
                        options: {
                            source: 'name'
                        }
                    },
                    {
                        name: "image",
                        title: "Image",
                        type: "image",
                        options: {
                            hotspot: true,
                        },
                        fields: [
                            {
                                name: "alt",
                                title: "Alt",
                                type: "string",
                            }
                        ]
                    },
                    {
                        name: "content",
                        title: "Content",
                        type: "array",
                        of: [{ type: 'block'}],
                    }
                ]
            },
        ]
    },
} */