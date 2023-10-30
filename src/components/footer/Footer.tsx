import { FC } from 'react';

import { AppLink, AppLinkTheme } from '../appLink/AppLink';
import Linkedin from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github-desktop.svg';

import styles from './Footer.module.scss';



interface FooterProps {
    className?: string;
}

export const Footer: FC<FooterProps> = (props) => {
    const { className } = props;

    return (
        <footer className={styles.footer}>
            <section className={styles.infos}>
                <AppLink href='' theme={AppLinkTheme.PRIMARY}>Impressum</AppLink>
                <AppLink href='' theme={AppLinkTheme.PRIMARY}>Datenschutz</AppLink>
            </section>
            <section className={styles.social}>
                <AppLink href='https://www.linkedin.com/in/zamukaev/' blank theme={AppLinkTheme.PRIMARY}> <Linkedin className={styles.icon} /></AppLink>
                <AppLink href='https://github.com/zamukaev' blank theme={AppLinkTheme.PRIMARY}><Github className={styles.icon} /></AppLink>

            </section>
        </footer>
    );
}