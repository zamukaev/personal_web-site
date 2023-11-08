import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import { Headline, HeadlineSize } from '@/components/headline/Headline';
import { TextSize, Text } from '../../text/Text';

import styles from './AboutMeItems.module.scss';
import { AboutItem } from '../About';

interface AboutMeItemsProps {
    className?: string;
    aboutMeItem: AboutItem[],
}

export const AboutMeItems: FC<AboutMeItemsProps> = (props) => {
    const {
        className,
        aboutMeItem,
    } = props;

    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (
        <ul ref={ref} className={classNames(styles.footer, { [styles.mounted]: inView })}>
            {aboutMeItem.map((item: AboutItem) => (
                <li key={item.id} className={classNames(styles.item, styles[item.cls])}>
                    <div className={styles.icon}></div>
                    <Headline
                        className={styles.title}
                        size={HeadlineSize.s}
                        headline='h3'
                    >
                        {item.title}
                    </Headline>
                    <Text
                        size={TextSize.M}
                        className={styles.text}
                    >
                        {item.text}
                    </Text>
                </li>
            ))}
        </ul >
    );
}