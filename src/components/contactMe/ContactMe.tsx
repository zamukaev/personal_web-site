import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';

import { Headline } from '../headline/Headline';
import ContactForm from '../contactForm/ContactForm';

import styles from './ContactMe.module.scss';
import { memo } from 'react';

interface ContactMeProps {
    className?: string;
    contactRef?: any;
    locale?: string;
}

const ContactMe: NextPage<ContactMeProps> = (props) => {
    const { contactRef, locale } = props;
    const { t } = useTranslation();

    return (
        <section ref={contactRef} className={styles.contact} >
            <Headline
                className={styles.title}
                headline='h2'
            >
                {t('contact')}
                <span className={styles.dot}>.</span>
            </Headline>
            <ContactForm locale={locale} />
        </section >
    );
}

export default memo(ContactMe);