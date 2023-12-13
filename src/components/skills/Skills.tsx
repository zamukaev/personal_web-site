import { NextPage } from "next";
import { memo } from "react";
import { useTranslation } from "next-i18next";

import { Headline, HeadlineSize } from "@/components/headline/Headline";
import SkillsItem from "./skillsItem/SkillsItem";

import { db } from "../../../db/db";

import classNames from "classnames";
import styles from "./Skills.module.scss";


interface SkillsProps {
    locale?: string;
    skillRef: any;
}

const Skill: NextPage<SkillsProps> = ({ skillRef }) => {
    const { t } = useTranslation()
    return (
        <section ref={skillRef} className={styles.skill}>
            <Headline
                headline="h2"
                size={HeadlineSize.M}
                className={styles.headline}
            >
                {t('skill')}
            </Headline>
            <ul className={classNames(styles.skillsList)}>
                {db.de.skills.map((skill) => (
                    <SkillsItem
                        key={skill.text}
                        icon={skill.icon}
                        text={skill.text}
                    />
                ))}
            </ul>
        </section >
    );
}

export default memo(Skill);