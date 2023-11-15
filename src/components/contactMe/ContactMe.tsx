import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

import styles from './ContactMe.module.scss';
import { Headline } from '../headline/Headline';
import Button, { Size, ThemeButton } from '../button/Button';
import { Text, TextSize, TextTheme } from '../text/Text';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';


interface ContactMeProps {
    className?: string;
    contactRef?: any;
}

export const ContactMe: FC<ContactMeProps> = (props) => {
    const { className, contactRef } = props;
    const [isDisabled, setIsDisabled] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [successfullyMessage, setSuccessfullyMessage] = useState('');
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const url: string = process.env.URL ? process.env.URL : '';

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
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
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
        setIsDisabled(true)
        const response = await axios.post(url, data)
        setSuccessfullyMessage(response.data.message);
        setName('');
        setEmail('');
        setMessage('');
    }

    useEffect(() => {
        setIsDisabled(name && email && message ? false : true);
        timerRef.current = setTimeout(() => {
            setSuccessfullyMessage('');
        }, 2000);
        return () => {
            clearTimeout(timerRef.current)
        }
    }, [name, email, message, successfullyMessage]);

    return (
        <section ref={contactRef} className={styles.contact} >
            <Headline className={styles.title} headline='h2'>Contact me.</Headline>
            <Text theme={TextTheme.PRIMARY}>{successfullyMessage}</Text>
            <form className={styles.form} ref={ref}>
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
        </section >
    );
}