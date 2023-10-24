import { FC, useEffect, useState } from "react";

import styles from "./Main.module.scss";
import MainTop from "../mainTop/MainTop";
import Skill from "../skills/Skills";
import Works from "../works/Works";
import { About } from "../about/About";


interface MainProps {

}

const Main: FC<MainProps> = () => {
    const [scroll, setScroll] = useState<number>(0);

    let firstSkillsRow = scroll >= 250;
    let secondSkillsRow = scroll >= 450;
    let therdSkillsRow = scroll >= 650;
    let isWorkItemsMounted = scroll >= 790;

    const visualViewport = () => {
        return addEventListener("scroll", (event) => {
            setScroll(window.scrollY);
        })
    };

    useEffect(() => {
        visualViewport();
    }, []);
    console.log(scroll)
    return (
        <main className={styles['page-wrapper']}>
            <MainTop />
            <Skill
                firstSkillsRow={firstSkillsRow}
                secondSkillsRow={secondSkillsRow}
                therdSkillsRow={therdSkillsRow} />
            <Works scroll={scroll} />
            <About />
        </main>
    );
}

export default Main;