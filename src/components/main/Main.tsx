import { NextPage } from "next";

import MainTop from "@/components/mainTop/MainTop";
import Skill from "@/components/skills/Skills";
import Works from "@/components/works/Works";
import About from "@/components/about/About";
import ContactMe from "@/components/contactMe/ContactMe";
import ToTop from "@/components/toTop/ToTop";

import { useScroll } from "../../hooks/useScroll";

import styles from "./Main.module.scss";

interface MainProps {
    skillRef: any;
    workRef: any
    aboutRef: any;
    contactRef: any;
    locale?: string;
    onScrollToSection: (section: string) => void
}

const Main: NextPage<MainProps> = (props) => {
    const {
        skillRef,
        contactRef,
        workRef,
        aboutRef,
        onScrollToSection,
        locale
    } = props;
    const { scroll } = useScroll();

    return (
        <main className={styles['page-wrapper']}>
            <MainTop onScrollToSection={onScrollToSection} locale={locale} />
            <Skill skillRef={skillRef} locale={locale} />
            <Works workRef={workRef} locale={locale} />
            <About aboutRef={aboutRef} locale={locale} />
            <ContactMe contactRef={contactRef} locale={locale} />
            {scroll >= 600 && <ToTop onScrollToSection={onScrollToSection} isVisible={scroll >= 700} />}
        </main>
    );
}

export default Main;