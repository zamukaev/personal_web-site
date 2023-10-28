import { FC, useCallback, useState } from "react";
import classNames from "classnames";
import { useInView } from 'react-intersection-observer';

import { Headline, HeadlineSize } from "../headline/Headline";
import { WorksItem } from "./worksItem/WorksItem";
import Button, { Size, ThemeButton } from "../button/Button";

import { db } from "../../../db/db";
import { Work } from "../../../db/types";

import styles from "./Works.module.scss";

interface WorksProps {
}

interface Tabs {
    text: string;
    id: number;
    category: string;
}

const Works: FC = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [category, setCategory] = useState('');
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    let worksListToDisplay = db.works;

    const tabSelectedHandler = (id: number, category: string) => {
        setTabIndex(id);
        setCategory(category);
    }

    if (category) {
        worksListToDisplay = db.works.filter((work: Work) => work.category.includes(category));
    }

    const renderWorksList = useCallback(() => {
        return worksListToDisplay.map((work: Work) => (
            <WorksItem
                key={work.id}
                title={work.title}
                text={work.text}
                image={work.image}
                pageLink={work.pageLink}
                gitHubLink={work.gitHubLink}
                id={work.id}
            />
        ))
    }, [worksListToDisplay]);

    return (
        <section ref={ref} className={classNames(styles.works, { [styles.mounted]: inView })}>
            <Headline
                headline="h2"
                size={HeadlineSize.M}
                className={classNames(styles.headline)}
            >
                My Work
            </Headline>
            <ul className={classNames(styles.tabs)}>
                {db.tabs.map((tab: Tabs, index: number) =>
                    <li
                        key={tab.id}
                        className={classNames(styles.tab, { [styles.active]: tabIndex == index })}
                    >
                        <Button
                            size={Size.M}
                            onClick={() => tabSelectedHandler(index, tab.category)}
                            className={styles.workBtn}
                            theme={ThemeButton.OUTLINE_RED}
                        >
                            {tab.text}
                        </Button>
                    </li>
                )}
            </ul>
            <div className={styles.worksList}>
                {renderWorksList()}
            </div>
        </section >
    );
}

export default Works;