import { FC } from "react";
import { BsCodeSlash } from 'react-icons/bs';

import styles from "./Logo.module.scss";
import { AppLink, AppLinkTheme } from "../appLink/AppLink";
interface LogoProps {

}

const Logo: FC<LogoProps> = () => {
    return (
        <AppLink href="/" theme={AppLinkTheme.CLEAR} className={styles.logo}>
            <BsCodeSlash size={40} fontWeight="bold" /> <h2 className={styles.name}>Muslim Zamukaev</h2>
        </AppLink >
    );
}

export default Logo;