import { FC } from "react";
import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import { ToTop } from "../toTop/ToTop";


interface HeaderProps {
    homeRef: any;
    onScrollToSection: (section: string) => void;
}
const Header: FC<HeaderProps> = ({ onScrollToSection, homeRef }) => {
    return (
        <header ref={homeRef} className={styles.header}>
            <Logo />
            <Navbar onScrollToSection={onScrollToSection} />
        </header>
    );
}

export default Header;