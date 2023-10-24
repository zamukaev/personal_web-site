import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './WorksItem.module.scss';
import { Headline, HeadlineTheme } from '@/components/headline/Headline';

import { AppLink, AppLinkTheme, AppLinkSize } from '@/components/appLink/AppLink';
import Works from '../Works';


interface WorksItemProps extends Omit<Works, 'category'> {
    className?: string;
    scroll: number;
}

export const WorksItem: FC<WorksItemProps> = (props) => {
    const {
        className,
        title,
        text,
        image,
        pageLink,
        gitHubLink,
        scroll
    } = props;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (scroll >= 1100) {
            setIsMounted(true);
        }
        if (scroll < 1100) {
            setIsMounted(false)
        }
    }, [scroll])

    return (
        <div className={`${styles.worksItem}  ${isMounted && styles.mounted}`}>
            <Image className={styles.image} src={image} alt={title} width={200} height={150} />
            <div className={styles.overlay}>
                <Headline
                    className={styles.headline}
                    headline='h3'
                    theme={HeadlineTheme.s}
                >
                    {title}
                </Headline>
                <p className={styles.paragraph}>{text}</p>
                <div className={styles.links}>
                    <AppLink
                        href={pageLink}
                        blank
                        className={styles.overlayBtn}
                        size={AppLinkSize.S}
                        theme={AppLinkTheme.OUTLINE_BTN}>
                        Try it out
                    </AppLink>
                    <AppLink
                        href={gitHubLink}
                        blank
                        className={styles.overlayBtn}
                        size={AppLinkSize.S}
                        theme={AppLinkTheme.OUTLINE_BTN}>
                        GitHub
                    </AppLink>
                </div>
            </div>
        </div >
    );
}