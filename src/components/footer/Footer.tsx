import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from '../appLink/AppLink';

import Linkedin from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github-desktop.svg';

import styles from './Footer.module.scss';

interface FooterProps {
    className?: string;
    locale?: string;
}

export const Footer: NextPage<FooterProps> = (props) => {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <section className={styles.infos}>
                <AppLink href='/imprint' theme={AppLinkTheme.PRIMARY}>{t('imprint')}</AppLink>
                <AppLink href='/legal_notice' theme={AppLinkTheme.PRIMARY}>{t('protection')}</AppLink>
            </section>
            <section className={styles.social}>
                <AppLink
                    href='https://www.linkedin.com/in/zamukaev/'
                    blank
                    theme={AppLinkTheme.PRIMARY}
                >
                    <Linkedin className={styles.icon} />
                </AppLink>
                <AppLink
                    href='https://github.com/zamukaev'
                    blank
                    theme={AppLinkTheme.PRIMARY}
                >
                    <Github className={styles.icon} />
                </AppLink>
            </section>
        </footer>
    );
}