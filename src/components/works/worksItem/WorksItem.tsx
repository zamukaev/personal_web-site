import { FC, } from 'react';
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import { Headline, HeadlineSize } from '@/components/headline/Headline';
import { AppLink, AppLinkTheme, AppLinkSize } from '@/components/appLink/AppLink'

import { Work } from '../../../../db/types';

import styles from './WorksItem.module.scss';

interface WorksItemProps extends Omit<Work, 'category'> {
    className?: string;
}

export const WorksItem: FC<WorksItemProps> = (props) => {
    const {
        className,
        title,
        text,
        image,
        pageLink,
        gitHubLink,
    } = props;

    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (
        <div ref={ref} className={classNames(styles.worksItem, { [styles.mounted]: inView })}>
            <Image className={styles.image} src={image} alt={title} width={600} height={450} />
            <div className={styles.overlay}>
                <Headline
                    className={styles.headline}
                    headline='h3'
                    size={HeadlineSize.s}
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