import Link from "next/link";
import { FC } from "react";

import styles from "./Navbar.module.scss";

import { useTranslation } from "react-i18next";

const navigation = [
  { content: "home" },
  { content: "skill" },
  { content: "portfolio" },
  { content: "about me" },
]

const Navbar: FC = () => {

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        {navigation.map(item => <li tabIndex={1} key={item.content} className={styles.menuItem}>{item.content}</li>)}
      </ul>
    </nav>
  );
}

export default Navbar;