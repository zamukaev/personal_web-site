import { FC, useEffect, useState } from "react";

import styles from "./Main.module.scss";
import MainTop from "../mainTop/MainTop";
import Skill from "../skills/Skills";
import Works from "../works/Works";
import { About } from "../about/About";
import { Portal } from "../portal/Portal";
import { ToTop } from "../toTop/ToTop";



interface MainProps {
    skillRef: any;
    workRef: any
    aboutRef: any;

    onScrollToSection: (section: string) => void
}

const Main: FC<MainProps> = ({ skillRef, workRef, aboutRef, onScrollToSection }) => {
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
            <Skill skillRef={skillRef} />
            <Works workRef={workRef} />
            <About aboutRef={aboutRef} />
            {scroll >= 600 && <ToTop onScrollToSection={onScrollToSection} isVisible={scroll >= 700} />}
        </main>
    );
}

export default Main;