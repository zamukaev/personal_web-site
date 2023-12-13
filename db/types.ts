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
    skills: Skill[];
}

export interface AboutItem {
    id: number;
    icon: string;
    title: string;
    text: string;
    cls: string;
}
export interface AboutMe {
    id: number;
    title: string;
    image: string;
    text: string;
    cv: string;
}
export interface IDb {
    de: Record<string, Array<any>>;
    en: Record<string, Array<any>>;
}
