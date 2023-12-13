import { NextPage } from "next";
import { memo } from "react";

import { db } from "../../../db/db";

import classNames from "classnames";
import styles from "./Navbar.module.scss";


interface NavbarProps {
    className?: string;
    isMounted?: boolean;
    locale?: string;
    onScrollToSection?: (section: string) => void;
}

const Navbar: NextPage<NavbarProps> = ({ className, locale, isMounted, onScrollToSection }) => {
    const scrollToSectionHandler = (value: string) => {
        if (onScrollToSection) {
            onScrollToSection(value)
        }
    }

    return (
        <nav className={classNames(styles.navbar, { [styles.mounted]: isMounted }, className)}>
            <ul className={styles.menu}>
                {db[locale === "de" ? "de" : "en"].navigation.map(item => (
                    <li
                        tabIndex={1}
                        key={item.id}
                        className={styles.menuItem}
                        onClick={() => scrollToSectionHandler(item.id)}
                    >
                        {item.content}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default memo(Navbar);