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
    const visualViewport = () => {
        return addEventListener("scroll", (event) => {
            setScroll(window.scrollY);
        })
    };

    useEffect(() => {
        visualViewport();
    }, []);

    return (
        <main className={styles['page-wrapper']}>
            <MainTop />
            <Skill />
            <Works />
            <About />
        </main>
    );
}

export default Main;