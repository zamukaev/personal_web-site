import { StaticImageData } from "next/image";

export interface Work {
    id: string;
    title: string;
    text: string;
    gitHubLink: string;
    pageLink: string;
    image: StaticImageData;
    category: string;
}

export interface Skill {
    text: string,
    icon: SVGAElement,
}

export interface DB {
    works: Work[];
    skills: Skill[]
}