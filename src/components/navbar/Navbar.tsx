import { FC } from "react";

import { db } from "../../../db/db";
import styles from "./Navbar.module.scss";
import classNames from "classnames";

interface NavbarProps {
    className?: string;
    isMounted?: boolean;
    onScrollToSection?: (section: string) => void;
}
const Navbar: FC<NavbarProps> = ({ className, isMounted, onScrollToSection }) => {

    const scrollToSectionHandler = (value: string) => {
        if (onScrollToSection) {
            onScrollToSection(value)
        }
    }

    return (
        <nav className={classNames(styles.navbar, { [styles.mounted]: isMounted }, className)}>
            <ul className={styles.menu}>
                {db.navigation.map(item => (
                    <li
                        tabIndex={1}
                        key={item.content}
                        className={styles.menuItem}
                        onClick={() => scrollToSectionHandler(item.content)}
                    >
                        {item.content}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;