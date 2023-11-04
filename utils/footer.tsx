export interface ContentListItemsInterface {
    name: string,
    link: string
}

interface FooterSectionListInterface {
    heading: string,
    contentList: ContentListItemsInterface[]
}

export const footerContentList: FooterSectionListInterface[] = [
    {
        heading: "Our Links",
        contentList: [
            {
                name: "Home",
                link: "#"
            },
            {
                name: "About us",
                link: "#"
            },
            {
                name: "Integrations",
                link: "#"
            },
            {
                name: "Team",
                link: "#"
            },
            {
                name: "Blog",
                link: "#"
            },
        ]
    },
    {
        heading: "Our Services",
        contentList: [
            {
                name: "Infrastructure provisioning",
                link: "#"
            },
            {
                name: "Network infrastructure automation",
                link: "#"
            },
            {
                name: "Cost optimization",
                link: "#"
            },
            {
                name: "Cloud migration",
                link: "#"
            },
            {
                name: "Kubernetes at scale",
                link: "#"
            },
        ]
    },
    {
        heading: "Other Links",
        contentList: [
            {
                name: "FAQ",
                link: "#"
            },
            {
                name: "Careers",
                link: "#"
            },
            {
                name: "Privacy Policy",
                link: "#"
            },
            {
                name: "Terms & Conditions",
                link: "#"
            },
            {
                name: "Support",
                link: "#"
            },
        ]
    }
]