import { NextPage } from 'next';
import { LegacyRef, ReactNode } from 'react';

import classNames from 'classnames';
import styles from './Headline.module.scss';

export enum HeadlineSize {
    L = 'l',
    M = 'm',
    s = 's',
}

interface HeadlineProps {
    className?: string;
    headline?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    size?: HeadlineSize;
    children?: ReactNode;
    ref?: LegacyRef<HTMLHeadingElement>;
}

export const Headline: NextPage<HeadlineProps> = (props) => {
    const {
        className,
        headline = 'h1',
        size = HeadlineSize.M,
        children,
        ...otherProps
    } = props;

    const Title = headline;

    return (
        <Title className={classNames(styles.headline, styles[size], className)} {...otherProps}>
            {children}
        </Title>
    );
}