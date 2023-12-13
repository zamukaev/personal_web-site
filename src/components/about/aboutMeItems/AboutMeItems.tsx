import { NextPage } from 'next';
import { useInView } from 'react-intersection-observer';

import { Headline, HeadlineSize } from '@/components/headline/Headline';
import { TextSize, Text } from '../../text/Text';

import { AboutItem } from '../../../../db/types';

import classNames from 'classnames';
import styles from './AboutMeItems.module.scss';
import { memo } from 'react';

interface AboutMeItemsProps {
    className?: string;
    aboutMeItem: AboutItem[],
}

const AboutMeItems: NextPage<AboutMeItemsProps> = ({ aboutMeItem }) => {
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

export default memo(AboutMeItems)