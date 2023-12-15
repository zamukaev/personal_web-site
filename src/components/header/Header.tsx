import { NextPage } from "next";
import { memo, useState } from "react";

import Navbar from "@/components/navbar/Navbar";
import BurgerMenu from "@/components/burgerMenu/BurgerMenu";
import Button, { ThemeButton } from "@/components/button/Button";
import LangSwitcher from "@/components/langSwitcher/LangSwitcher";
import Logo from "../logo/Logo";

import { useResize } from "../../hooks/useResize";

import classNames from "classnames";
import styles from "./Header.module.scss";

interface HeaderProps {
    homeRef: any;
    locale?: string;
    onScrollToSection: (section: string) => void;
}
const Header: NextPage<HeaderProps> = ({ onScrollToSection, locale, homeRef }) => {
    const { width } = useResize();
    const [isMounted, setIsMounted] = useState(false);

    const toggleBurgerMenu = () => {
        setIsMounted(prev => !prev)
    };
    return (
        <header ref={homeRef} className={styles.header}>
            <Logo />
            {width >= 1024 && <Navbar onScrollToSection={onScrollToSection} />}
            {width <= 1024 && <BurgerMenu isMounted={isMounted} onScrollToSection={onScrollToSection} />}
            {width <= 1024 && (
                <Button className={classNames(styles.btn, { [styles.visible]: isMounted })} onClick={toggleBurgerMenu} theme={ThemeButton.CLEAR}>
                    <span className={styles.firstBtnItem}></span>
                    <span className={styles.secondBtnItem}></span>
                </Button>
            )}
            {width >= 1024 && <LangSwitcher />}
        </header>
    );
}

export default memo(Header);