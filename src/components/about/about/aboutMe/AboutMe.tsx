import { FC } from 'react'
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import { Headline, HeadlineSize } from '@/components/headline/Headline';
import { Text, TextSize } from '../../../text/Text';
import Image from 'next/image';

import styles from './AboutMe.module.scss';

interface AboutMeProps {
    className?: string;
    image: string
    title: string;
    text: string;
    cv: string;
}

export const AboutMe: FC<AboutMeProps> = (props) => {
    const {
        className,
        title,
        text,
        image,
        cv
    } = props;

    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (
        <div
            ref={ref}
            className={classNames(styles.top, { [styles.mounted]: inView })}>
            <div className={styles.avatar}>
                <Image className={styles.img} src={image} alt={''} width={370} height={300} />
            </div>
            <div className={styles.aboutMe}>
                <Headline
                    className={styles.title}
                    size={HeadlineSize.M}
                    headline='h2'
                >
                    {title}
                </Headline>
                <Text size={TextSize.M} className={styles.text}>
                    {text}
                </Text>
                <Text
                    size={TextSize.M}
                    className={styles.secondText}
                >
                    Öffnen sie meinen
                    <a href={cv} target='_blank'><span className={styles.cv}> CV</span> </a>
                </Text>
            </div>
        </div>
    );
}