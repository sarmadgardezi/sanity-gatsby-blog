export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6324535a2139ab20ed8d3507",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-tephyve6",
                  apiId: "a76aae63-6a35-40f9-8b76-17f95b24dcee",
                },
                {
                  buildHookId: "6324535a748e5625bb18d1fe",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1r3v498o",
                  apiId: "ae5b9732-0b0a-48a4-901a-c7d26f4fc89b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sarmadgardezi/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1r3v498o.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
