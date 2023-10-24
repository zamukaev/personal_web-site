import { FC, useState } from "react";
import Button, { Size, ThemeButton } from "../button/Button";
import classNames from "classnames";
import { Headline, HeadlineSize } from "../headline/Headline";
import { WorksItem } from "./worksItem/WorksItem";

import WorkImage from "../../assets/works/blog.png";
import { StaticImageData } from "next/image";
import styles from "./Works.module.scss";

interface WorksProps {
    scroll: number;
}
interface Tabs {
    text: string;
    id: number;
    category: string;
}
interface Works {
    id: string;
    title: string;
    text: string;
    gitHubLink: string;
    pageLink: string;
    image: StaticImageData;
    category: string;
}
export const tabs: Array<Tabs> = [
    { text: 'All', id: 0, category: '' },
    { text: 'React', id: 1, category: 'react.js' },
    { text: 'Next', id: 2, category: 'next.js' }
];

export const worksObj: Array<Works> = [
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
        id: '1h2u32',
        title: 'Blog',
        text: 'Next.js based wep-app(Blog platform)',
        gitHubLink: 'https://github.com/zamukaev/capstone-project',
        pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
        image: WorkImage,
        category: 'react.js'
    },
    {
        id: '1e6b31',
        title: 'Blog',
        text: 'Next.js based wep-app(Blog platform)',
        gitHubLink: 'https://github.com/zamukaev/capstone-project',
        pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
        image: WorkImage,
        category: 'next.js'
    },
    {
        id: '1e6b31',
        title: 'Blog',
        text: 'Next.js based wep-app(Blog platform)',
        gitHubLink: 'https://github.com/zamukaev/capstone-project',
        pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
        image: WorkImage,
        category: 'next.js'
    },
];
const Works: FC<WorksProps> = ({ scroll }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [category, setCategory] = useState('');


    const tabSelectedHandler = (id: number, category: string) => {
        setTabIndex(id);
        setCategory(category);
    }

    return (
        <section className={styles.works}>
            <Headline headline="h2" size={HeadlineSize.M}
                className={
                    classNames(styles.headline, { [styles.mounted]: scroll >= 1000 })
                }>My Work</Headline>
            <ul className={classNames(styles.tabs, { [styles.mounted]: scroll > 1000 })}>
                {tabs.map((tab: Tabs, index: number) =>
                    <li
                        key={tab.id}
                        className={
                            classNames(
                                styles.tab,
                                { [styles.active]: tabIndex == index },
                            )
                        }
                    >
                        <Button size={Size.M} onClick={() => tabSelectedHandler(index, tab.category)} className={styles.workBtn} theme={ThemeButton.OUTLINE_RED}>
                            {tab.text}
                        </Button>
                    </li>
                )}
            </ul>
            <div className={styles.worksList}>
                {worksObj.filter((work: Works) => work.category.includes(category)).map((work: Works) => (
                    <WorksItem
                        key={work.id}
                        title={work.title}
                        text={work.text}
                        image={work.image}
                        pageLink={work.pageLink}
                        gitHubLink={work.gitHubLink}
                        id={work.id}
                        scroll={scroll}
                    />
                )
                )}
            </div>
        </section >
    );
}

export default Works;