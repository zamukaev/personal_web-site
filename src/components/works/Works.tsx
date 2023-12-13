import { NextPage } from "next";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from 'react-intersection-observer';

import { Headline, HeadlineSize } from "@/components/headline/Headline";
import Button, { Size, ThemeButton } from "@/components/button/Button";
import WorksItem from "./worksItem/WorksItem";

import { db } from "../../../db/db";
import { Work } from "../../../db/types";

import classNames from "classnames";
import styles from "./Works.module.scss";

interface WorksProps {
    workRef: any;
    locale?: string;
}

interface Tabs {
    text: string;
    id: number;
    category: string;
}

const Works: NextPage<WorksProps> = ({ workRef }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [category, setCategory] = useState('');
    const { t } = useTranslation();

    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    let worksListToDisplay = db.de.works;

    const tabSelectedHandler = (id: number, category: string) => {
        setTabIndex(id);
        setCategory(category);
    }

    if (category) {
        worksListToDisplay = db.de.works.filter((work: Work) => work.category.includes(category));
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
        <section ref={workRef} className={classNames(styles.works, { [styles.mounted]: inView })}>
            <Headline
                headline="h2"
                size={HeadlineSize.M}
                className={classNames(styles.headline)}
            >
                {t('work')}
            </Headline>
            <ul ref={ref} className={classNames(styles.tabs)}>
                {db.de.tabs.map((tab: Tabs, index: number) =>
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

export default memo(Works);