import { FC } from "react";
import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import LangSwitcher from "../langSwitcher/LangSwitcher";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;