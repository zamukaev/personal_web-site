import { FC } from 'react'
import { Headline } from '../headline/Headline';
import { ContactForm } from '../contactForm/ContactForm';

import styles from './ContactMe.module.scss';

interface ContactMeProps {
    className?: string;
    contactRef?: any;
}

export const ContactMe: FC<ContactMeProps> = (props) => {
    const { className, contactRef } = props;

    return (
        <section ref={contactRef} className={styles.contact} >
            <Headline className={styles.title} headline='h2'>Contact me.</Headline>
            <ContactForm />
        </section >
    );
}