// For The Xerocodee Way Component
export interface StepsInterface {
    path: string,
    alt: string,
    heading: string,
    subheading: string,
    height: number,
    width: number
}

const stepsPoint1: StepsInterface[] = [
    {
        path: "/assets/xerocodeeWay/point11.png",
        alt: "Point11",
        heading: "In Your Cloud",
        subheading: "Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely scalable. Azure support coming soon.",
        height: 300,
        width: 400
    }
]

const stepsPoint2: StepsInterface[] = [
    {
        path: "/assets/xerocodeeWay/point21.png",
        alt: "Point21",
        heading: "Configurable Build and Deploy pipelines",
        subheading: "Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.",
        height: 300,
        width: 400
    },
    {
        path: "/assets/xerocodeeWay/point22.png",
        alt: "Point22",
        heading: "Push to Deploy",
        subheading: "Just connect your repo with one click and push. Argonaut's deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.",
        height: 300,
        width: 400
    },
    {
        path: "/assets/xerocodeeWay/point23.png",
        alt: "Point23",
        heading: "Multiple runtimes",
        subheading: "Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.",
        height: 300,
        width: 400
    },
    {
        path: "/assets/xerocodeeWay/point24.png",
        alt: "Point24",
        heading: "Scale infinitely",
        subheading: "Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.",
        height: 300,
        width: 400
    }
]

const stepsPoint3: StepsInterface[] = [
    {
        path: "/assets/xerocodeeWay/point31.png",
        alt: "Point21",
        heading: "Customizable Cost Dashboards and Reports",
        subheading: "Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.",
        height: 137,
        width: 130
    },
    {
        path: "/assets/xerocodeeWay/point32.png",
        alt: "Point22",
        heading: "Preview Infra Costs",
        subheading: "See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.",
        height: 215,
        width: 260
    },
    {
        path: "/assets/xerocodeeWay/point33.png",
        alt: "Point23",
        heading: "Observability From Day One",
        subheading: "Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.",
        height: 108,
        width: 350
    }
]

interface PointsInterface {
    heading: string,
    subheading: string,
    steps: StepsInterface[]
}

export const points: PointsInterface[] = [
    {
        heading: "Self Serve Infrastructure",
        subheading: "Accelerate by self-serving production-ready infrastructure and customize as you scale.",
        steps: stepsPoint1
    },
    {
        heading: "Deploy applications, fast!",
        subheading: "Set up automated deployments of your application in 5 minutes and get back to building stuff that matters.",
        steps: stepsPoint2
    },
    {
        heading: "Visibility into Costs and Metrics",
        subheading: "Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.",
        steps: stepsPoint3
    },
]