import { FC } from "react";

import Button, { Size, ThemeButton } from "../button/Button";
import { Headline, HeadlineSize } from "../headline/Headline";
import styles from "./MainTop.module.scss";
const MainTop: FC = () => {
    return (
        <section className={styles.homeTop}>
            <div className={styles.left}>
                <Headline headline="h1" size={HeadlineSize.L} className={styles.headline}>Hi,<br />I&apos;m <span className={styles.name}>Muslim</span> Zamukaev<br /> Web Develop<span className={styles.dev}>e</span>r</Headline>
                <Button size={Size.L} onClick={() => console.log(1)} className={styles.button} theme={ThemeButton.OUTLINE}>Contact me</Button>
            </div>
        </section>
    );
}

export default MainTop;