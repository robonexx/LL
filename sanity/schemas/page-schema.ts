
const simplePage = {
    name: 'simplePage',

    title: 'simplePage',

    type: 'document',

    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: 'title'
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
}

export default simplePage