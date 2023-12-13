import { NextPage } from 'next';
import { BsCodeSlash } from 'react-icons/bs';

import { AppLink, AppLinkTheme } from "../appLink/AppLink";

import styles from "./Logo.module.scss";

const Logo: NextPage = () => {
    return (
        <AppLink href="/" theme={AppLinkTheme.CLEAR} className={styles.logo}>
            <BsCodeSlash
                size={40}
                fontWeight="bold"
            />
            <h2 className={styles.name}>Muslim Zamukaev</h2>
        </AppLink >
    );
}

export default Logo;