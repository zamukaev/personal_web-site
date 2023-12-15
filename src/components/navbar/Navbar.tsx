import { NextPage } from "next";
import { memo } from "react";
import { useRouter } from "next/router";

import { db } from "../../../db/db";

import classNames from "classnames";
import styles from "./Navbar.module.scss";


interface NavbarProps {
    className?: string;
    isMounted?: boolean;
    onScrollToSection?: (section: string) => void;
}

const Navbar: NextPage<NavbarProps> = ({ className, isMounted, onScrollToSection }) => {
    const router = useRouter();
    const pathName = router.pathname === '/imprint' || router.pathname === '/legal_notice';
    const toPage = (id: string) => {
        if (pathName) {
            router.push('/');
        } else {
            onScrollToSection && onScrollToSection(id);
        }
    }

    return (
        <nav className={classNames(styles.navbar, { [styles.mounted]: isMounted }, className)}>
            <ul className={styles.menu}>
                {db[router.locale === "de" ? "de" : "en"].navigation.map(item => (
                    <li
                        tabIndex={1}
                        key={item.id}
                        className={styles.menuItem}
                        onClick={() => toPage(item.id)}
                    >
                        {item.content}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default memo(Navbar);