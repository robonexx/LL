import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './sanity/schemas'
import { brandTheme } from './theme'
import StudioNavbar from './components/StudioNavbar'
import Logo from './components/StudioLogo'
import { defaultDocumentNode } from './sanity/desk/defaultDocumentNode'
import { deskStructure } from './sanity/desk/deskStructure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET 
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION 


const config = defineConfig<any>({
    projectId,
    dataset,
    name: "LockerLegends_Studio",
    title: "LockerLegends",
    basePath: "/admin",
    apiVersion,
    useCdn: false,
    plugins: [
        deskTool({
            defaultDocumentNode,
            structure: deskStructure,
        }),
        visionTool()],
    schema: {
        types: schemas,
    },
    studio: {
        components: {
            logo: Logo,
            navbar: StudioNavbar,
        }
    },
    theme: brandTheme,
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