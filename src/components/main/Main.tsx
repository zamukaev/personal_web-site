import { FC, useEffect, useState } from "react";

import styles from "./Main.module.scss";
import MainTop from "../mainTop/MainTop";
import Skill from "../skills/Skills";
import Works from "../works/Works";
import { About } from "../about/About";
import { Portal } from "../portal/Portal";
import { ToTop } from "../toTop/ToTop";
import { useScroll } from "../../hooks/useScroll";
import { useResize } from "../../hooks/useResize";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";
import { ContactMe } from "../contactMe/ContactMe";



interface MainProps {
    skillRef: any;
    workRef: any
    aboutRef: any;
    contactRef: any;
    onScrollToSection: (section: string) => void
}

const Main: FC<MainProps> = (props) => {
    const {
        skillRef,
        contactRef,
        workRef,
        aboutRef,
        onScrollToSection
    } = props;
    const { scroll, setScroll } = useScroll();
    const { width } = useResize();
    return (
        <main className={styles['page-wrapper']}>
            <MainTop onScrollToSection={onScrollToSection} />
            <Skill skillRef={skillRef} />
            <Works workRef={workRef} />
            <About aboutRef={aboutRef} />
            <ContactMe contactRef={contactRef} />
            {scroll >= 600 && <ToTop onScrollToSection={onScrollToSection} isVisible={scroll >= 700} />}
        </main>
    );
}

export default Main;