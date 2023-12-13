import { NextPage } from 'next';
import { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { useInView } from "react-intersection-observer";

import Button, { Size, ThemeButton } from "@/components/button/Button";
import { Headline, HeadlineSize } from "@/components/headline/Headline";

import classNames from "classnames";
import styles from "./MainTop.module.scss";


interface MainTopProps {
    locale?: string;
    onScrollToSection?: (value: string) => void;
}

const MainTop: NextPage<MainTopProps> = ({ onScrollToSection }) => {
    const { t } = useTranslation();
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
                <Headline
                    headline="h1"
                    size={HeadlineSize.L}
                    className={styles.headline}
                >
                    {t('greeting')},<br />
                    {t('name')}<span className={styles.name}>Muslim</span> Zamukaev<br />
                    Web Develop<span className={styles.dev}>e</span>r.
                </Headline>
                <Button
                    size={Size.L}
                    onClick={scrollToSection}
                    className={styles.button}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('contact')}
                </Button>
            </div>
        </section>
    );
}

export default memo(MainTop);

