import { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import { ToTop } from "../toTop/ToTop";
import { useResize } from "../../../hooks/useResize";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";
import Button, { ThemeButton } from "../button/Button";
import classNames from "classnames";


interface HeaderProps {
    homeRef: any;
    onScrollToSection: (section: string) => void;
}
const Header: FC<HeaderProps> = ({ onScrollToSection, homeRef }) => {
    const { width } = useResize();
    const [isMounted, setIsMounted] = useState(false);

    const toggleBurgerMenu = () => {
        setIsMounted(prev => !prev)
    };
    return (
        <header ref={homeRef} className={styles.header}>
            <Logo />
            {width >= 733 && <Navbar onScrollToSection={onScrollToSection} />}
            {width <= 733 && <BurgerMenu isMounted={isMounted} onScrollToSection={onScrollToSection} />}
            {width <= 733 && (
                <Button className={classNames(styles.btn, { [styles.visible]: isMounted })} onClick={toggleBurgerMenu} theme={ThemeButton.CLEAR}>
                    <span className={styles.firstBtnItem}></span>
                    <span className={styles.secondBtnItem}></span>
                </Button>
            )}
        </header>
    );
}

export default Header;