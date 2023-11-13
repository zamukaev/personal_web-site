import { FC } from "react";

import Button, { Size, ThemeButton } from "../button/Button";
import { Headline, HeadlineSize } from "../headline/Headline";
import styles from "./MainTop.module.scss";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

interface MainTopProps {
    onScrollToSection?: (value: string) => void;
}
const MainTop: FC<MainTopProps> = ({ onScrollToSection }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const scrollToSection = () => {
        if (onScrollToSection) {
            onScrollToSection('contact')
        }
    }
    return (
        <section className={styles.homeTop}>
            <div ref={ref} className={classNames(styles.content, { [styles.mounted]: inView })}>
                <Headline headline="h1" size={HeadlineSize.L} className={styles.headline}>Hi,<br />{"I'm"}<span className={styles.name}>Muslim</span> Zamukaev<br /> Web Develop<span className={styles.dev}>e</span>r</Headline>
                <Button size={Size.L} onClick={scrollToSection} className={styles.button} theme={ThemeButton.OUTLINE}>contact me</Button>
            </div>
        </section>
    );
}

export default MainTop;

