import { FC, useEffect, useRef, useState } from "react";

import styles from "./Skills.module.scss";
import NodeJs from "../../assets/icons/node.svg"
import ReactJs from "../../assets/icons/react.svg";
import Npm from "../../assets/icons/npm.svg";
import ReduxJs from "../../assets/icons/redux.svg";
import Ts from "../../assets/icons/ts.svg";
import CSS from "../../assets/icons/css3.svg";
import Git from "../../assets/icons/git.svg";
import Js from "../../assets/icons/js.svg";
import Mdb from "../../assets/icons/mongodb.svg";
import Styled from "../../assets/icons/styled.svg";
import Html from "../../assets/icons/html-5.svg";
import { Headline, HeadlineTheme } from "../headline/Headline";
import { SkillsItem } from "./skillsItem/SkillsItem";

interface SkillProps {
    firstSkillsRow: boolean;
    secondSkillsRow: boolean;
    therdSkillsRow: boolean;

}
export const skills = [
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
]
const Skill: FC<SkillProps> = ({ firstSkillsRow, secondSkillsRow, therdSkillsRow }) => {
    console.log(firstSkillsRow)
    return (
        <section className={styles.skill}>
            <Headline headline="h2" theme={HeadlineTheme.M} className={styles.headline}>MY Skills</Headline>
            <ul className={styles.skillsList}>
                {skills.map((skill) => (
                    <SkillsItem
                        key={skill.text}
                        firstSkillsRow={firstSkillsRow}
                        secondSkillsRow={secondSkillsRow}
                        therdSkillsRow={therdSkillsRow}
                        icon={skill.icon}
                        text={skill.text}
                    />

                ))}
            </ul>
        </section >
    );
}

export default Skill;