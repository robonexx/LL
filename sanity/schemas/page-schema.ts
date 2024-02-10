
const simplePage = {
    name: 'page',

    title: 'Page',

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
            title: "Banner-image",
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
            name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Alternative text',
          description: `Some of your visitors cannot see images, 
              be they blind, color-blind, low-sighted; 
              alternative text is of great help for those 
              people that can rely on it to have a good idea of 
              what\'s on your page.`,
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
        }

    ]
}

export default simplePage