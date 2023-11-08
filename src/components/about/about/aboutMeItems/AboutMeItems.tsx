import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import { Headline, HeadlineSize } from '@/components/headline/Headline';
import { TextSize, Text } from '../../../text/Text';

import styles from './AboutMeItems.module.scss';

interface AboutMeItemsProps {
    className?: string;
    cls: string;
    title: string;
    text: string;
}

export const AboutMeItems: FC<AboutMeItemsProps> = (props) => {
    const {
        className,
        title,
        text,
        cls
    } = props;

    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (
        <li ref={ref} className={classNames(styles[cls], { [styles.mounted]: inView })}>
            <div className={styles.icon}></div>
            <Headline
                className={styles.title}
                size={HeadlineSize.s}
                headline='h3'
            >
                {title}
            </Headline>
            <Text
                size={TextSize.M}
                className={styles.text}
            >
                {text}
            </Text>
        </li>
    );
}