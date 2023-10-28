import WorkImage from "../src/assets/works/blog.png";
import NodeJs from "../src/assets/icons/node.svg"
import ReactJs from "../src/assets/icons/react.svg";
import Npm from "../src/assets/icons/npm.svg";
import ReduxJs from "../src/assets/icons/redux.svg";
import Ts from "../src/assets/icons/ts.svg";
import Git from "../src/assets/icons/git.svg";
import Js from "../src/assets/icons/js.svg";
import Mdb from "../src/assets/icons/mongodb.svg";
import Html from "../src/assets/icons/html-5.svg";

export const db: Record<string, Array<any>> = {
    works: [
        {
            id: '1h4u62',
            title: 'Blog',
            text: 'Next.js based wep-app(Blog platform)',
            gitHubLink: 'https://github.com/zamukaev/capstone-project',
            pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
            image: WorkImage,
            category: 'next.js'
        },
        {
            id: '1h245632',
            title: 'Blog',
            text: 'Next.js based wep-app(Blog platform)',
            gitHubLink: 'https://github.com/zamukaev/capstone-project',
            pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
            image: WorkImage,
            category: 'react.js'
        },
        {
            id: '1e6b981',
            title: 'Blog',
            text: 'Next.js based wep-app(Blog platform)',
            gitHubLink: 'https://github.com/zamukaev/capstone-project',
            pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
            image: WorkImage,
            category: 'next.js'
        },
        {
            id: '0e6b31',
            title: 'Blog',
            text: 'Next.js based wep-app(Blog platform)',
            gitHubLink: 'https://github.com/zamukaev/capstone-project',
            pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
            image: WorkImage,
            category: 'next.js'
        },
    ],
    skills: [
        {
            text: "JavaScript",
            icon: Js,
        },
        {
            text: "TypeScript",
            icon: Ts,
        },
        {
            text: "React",
            icon: ReactJs,
        },
        {
            text: "Redux",
            icon: ReduxJs,
        },
        {
            text: "HTML / CSS",
            icon: Html,
        },
        {
            text: "Node.js",
            icon: NodeJs,
        },
        {
            text: "MongoDB / Mongoose",
            icon: Mdb,
        },
        {
            text: "npm",
            icon: Npm,
        },
        {
            text: "Git / GitHub",
            icon: Git,
        },
    ],
    tabs: [
        { text: 'All', id: 0, category: '' },
        { text: 'React', id: 1, category: 'react.js' },
        { text: 'Next', id: 2, category: 'next.js' }
    ],
}