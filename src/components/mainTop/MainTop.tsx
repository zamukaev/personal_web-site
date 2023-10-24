import { FC } from "react";
import Image from "next/image";
import Button, { Size, ThemeButton } from "../button/Button";

import IImage from "../../assets/portrai.png";
import BgImage from "../../assets/bg/bg.png";

import styles from "./MainTop.module.scss";
import { Headline, HeadlineTheme } from "../headline/Headline";

const MainTop: FC = () => {
    return (
        <section className={styles.homeTop}>
            <div className={styles.left}>
                <Headline headline="h1" theme={HeadlineTheme.L} className={styles.headline}>Hi,<br />I&apos;m <span className={styles.name}>Muslim</span> Zamukave<br /> Front End Develop<span className={styles.dev}>e</span>r</Headline>
                <Button size={Size.L} onClick={() => console.log(1)} className={styles.button} theme={ThemeButton.OUTLINE}>Contact me</Button>
            </div>
            {/* <div className={styles.right}>
                <Image src={IImage} alt="my photo" height={400} width={400} />
            </div> */}

        </section>
    );
}

export default MainTop;