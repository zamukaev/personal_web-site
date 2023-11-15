import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

import { Text, TextSize, TextTheme } from '../text/Text';
import Button, { Size, ThemeButton } from '../button/Button';

import { useInView } from 'react-intersection-observer';
import axios from 'axios';

import styles from './ContactForm.module.scss';
import classNames from 'classnames';

interface ContactFormProps {
    className?: string;
}

export const ContactForm: FC<ContactFormProps> = (props) => {
    const { className } = props;
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
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const url: string = process.env.NEXT_PUBLIC_URL || '';
    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setName(value);
    }

    const onBlurName = () => {
        if (!name.trim() || name.length <= 3) {
            setNameError('Your Name is required')
        }
        else {
            setNameError('')
        }
    }
    const onBlurEmail = () => {

        if (!email.trim() || email.length <= 10) {
            setEmailError('Your valid Email is required')
        }
        if (!emailRegex.test(email)) {
            setEmailError('Your valid Email is required')
        } else {
            setEmailError('')
        }
    }
    const onBlurMessage = () => {
        if (!message.trim() || message.length <= 10) {
            setMessageError('Please write something')
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
        setSuccessfullyMessage('Email wird gesendet...');
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
                        placeholder='enter your name'
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
                        placeholder='enter your Email adress'
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
                    <label htmlFor="message">Message</label>
                    <textarea
                        onChange={messageChangeHandler}
                        onBlur={onBlurMessage}
                        name="message"
                        id="message"
                        value={message}
                        placeholder='write your message'
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
                    send
                </Button>
            </form>
        </>
    );
}