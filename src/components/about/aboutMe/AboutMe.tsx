import { NextPage } from 'next';
import Image from 'next/image';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import { Headline, HeadlineSize } from '@/components/headline/Headline';
import { Text, TextSize } from '@/components/text/Text';

import classNames from 'classnames';
import styles from './AboutMe.module.scss';


interface AboutMeProps {
    className?: string;
    image: string
    title: string;
    text: string;
    cv: string;
    locale?: string;
}

const AboutMe: NextPage<AboutMeProps> = (props) => {
    const {
        title,
        text,
        image,
        cv,
    } = props;

    const { t } = useTranslation();
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
                    {t('cv_open')}
                    <a href={cv} target='_blank'><span className={styles.cv}> CV</span> </a>
                </Text>
            </div>
        </div>
    );
}

export default memo(AboutMe)