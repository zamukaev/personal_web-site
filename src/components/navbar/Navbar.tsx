import { FC } from "react";

import { db } from "../../../db/db";
import styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "../appLink/AppLink";
interface NavbarProps {
    onScrollToSection: (section: string) => void;
}
const Navbar: FC<NavbarProps> = ({ onScrollToSection }) => {

    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                {db.navigation.map(item => (
                    <li
                        tabIndex={1}
                        key={item.content}
                        className={styles.menuItem}
                        onClick={() => onScrollToSection(item.content)}
                    >
                        {item.content}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;