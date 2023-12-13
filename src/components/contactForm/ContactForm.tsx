import { NextPage } from 'next';
import { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import { Text, TextSize, TextTheme } from '../text/Text';
import Button, { Size, ThemeButton } from '../button/Button';

import axios from 'axios';

import classNames from 'classnames';
import styles from './ContactForm.module.scss';

interface ContactFormProps {
    className?: string;
    locale?: string;
}

const ContactForm: NextPage<ContactFormProps> = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [successfullyMessage, setSuccessfullyMessage] = useState('');

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const url: string = process.env.NEXT_PUBLIC_URL || '';
    const { t } = useTranslation();

    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setName(value);
    }

    const onBlurName = () => {
        if (!name.trim() || name.length <= 3) {
            setNameError(t('nameError'))
        }
        else {
            setNameError('')
        }
    }
    const onBlurEmail = () => {

        if (!email.trim() || email.length <= 10) {
            setEmailError(t('emailError'))
        }
        if (!emailRegex.test(email)) {
            setEmailError(t('emailError'))
        } else {
            setEmailError('')
        }
    }
    const onBlurMessage = () => {
        if (!message.trim() || message.length <= 10) {
            setMessageError(t('messageError'))
        } else {
            setMessageError('');
        }
    }

    const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const messageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    const formSubmit = async () => {
        const data = {
            name,
            email,
            message
        }
        setIsDisabled(true);
        setSuccessfullyMessage(t('sentemail'));
        const response = await axios.post(url, data)
        setSuccessfullyMessage(response.data.message);
        setName('');
        setEmail('');
        setMessage('');
    }

    useEffect(() => {
        if (name.length >= 3 && emailRegex.test(email) && message.length >= 10) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [name, email, message]);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setSuccessfullyMessage('');
        }, 2000);
        return () => {
            clearTimeout(timerRef.current)
        }
    }, [successfullyMessage]);

    return (
        <>
            <Text theme={TextTheme.INFO}>{successfullyMessage}</Text>
            <form className={classNames(styles.form, { [styles.mounted]: inView })} ref={ref}>
                <div className={styles.nameInput}>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={nameChangeHandler}
                        onBlur={onBlurName}
                        type="text"
                        id='name'
                        name='name'
                        value={name}
                        placeholder={t('enter_name')}
                    />
                    {nameError &&
                        <Text
                            theme={TextTheme.RED}
                            size={TextSize.M}
                        >
                            {nameError}
                        </Text>
                    }
                </div>
                <div className={styles.emailInput}>
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={emailChangeHandler}
                        onBlur={onBlurEmail}
                        type="email"
                        name='email'
                        id='email'
                        value={email}
                        placeholder={t('enter_mail')}
                    />
                    {emailError &&
                        <Text
                            theme={TextTheme.RED}
                            size={TextSize.M}
                        >
                            {emailError}
                        </Text>}
                </div>
                <div className={styles.messageInput}>
                    <label htmlFor="message">{t('message')}</label>
                    <textarea
                        onChange={messageChangeHandler}
                        onBlur={onBlurMessage}
                        name="message"
                        id="message"
                        value={message}
                        placeholder={t('enter_message')}
                    />
                    {messageError &&
                        <Text
                            theme={TextTheme.RED}
                            size={TextSize.M}
                        >
                            {messageError}
                        </Text>}
                </div>
                <Button
                    onClick={formSubmit}
                    type='button'
                    disabled={isDisabled}
                    className={styles.btn}
                    size={Size.M}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('sendBtn')}
                </Button>
            </form>
        </>
    );
};

export default memo(ContactForm);