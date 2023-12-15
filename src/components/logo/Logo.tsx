import { NextPage } from 'next';
import { memo } from 'react';
import { BsCodeSlash } from 'react-icons/bs';

import { AppLink, AppLinkTheme } from "../appLink/AppLink";

import styles from "./Logo.module.scss";
import { Headline, HeadlineSize } from '../headline/Headline';

const Logo: NextPage = () => {
    return (
        <AppLink href="/" theme={AppLinkTheme.CLEAR} className={styles.logo}>
            <BsCodeSlash
                size={50}
                fontWeight="bold"
                color='#33bcd8'
            />
            <Headline size={HeadlineSize.s} className={styles.name}>Muslim Zamukaev</Headline>
        </AppLink >
    );
}

export default memo(Logo);