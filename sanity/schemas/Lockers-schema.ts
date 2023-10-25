
const lockers = {
    name: 'lockers',

    title: 'Lockers',

    type: 'document',

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
            name: "aka",
            title: "Aka",
            type: "string",
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
            name: "description",
            title: "Desctription",
            type: "array",
            of: [{ type: 'block'}],
        },
        {
            name: "href",
            title: "Href",
            type: "string",
        },
        {
            name: "id",
            title: "Id",
            type: "string",
        },
        

    ]
}

export default lockers