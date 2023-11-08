import { FC } from "react";
import classNames from "classnames";

import { Headline, HeadlineSize } from "../headline/Headline";
import { SkillsItem } from "./skillsItem/SkillsItem";

import { db } from "../../../db/db";

import styles from "./Skills.module.scss";
interface SkillsProps {
    skillRef: any
}
const Skill: FC<SkillsProps> = ({ skillRef }) => {
    return (
        <section ref={skillRef} className={styles.skill}>
            <Headline
                headline="h2"
                size={HeadlineSize.M}
                className={styles.headline}
            >
                MY Skills
            </Headline>
            <ul className={classNames(styles.skillsList)}>
                {db.skills.map((skill) => (
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

export default Skill;