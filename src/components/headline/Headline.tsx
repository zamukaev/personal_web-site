import { FC, ReactNode } from 'react'

import styles from './Headline.module.scss';
import classNames from 'classnames';

export enum HeadlineSize {
    L = 'l',
    M = 'm',
    s = 's',
}
interface HeadlineProps {
    className?: string;
    headline?: 'h1' | 'h2' | 'h3';
    size?: HeadlineSize;
    children?: ReactNode;
}


export const Headline: FC<HeadlineProps> = (props) => {
    const {
        className,
        headline = 'h1',
        size = HeadlineSize.M,
        children,
    } = props;
    const Title = headline;
    return (
        <Title className={classNames(styles.headline, styles[size], className)}>
            {children}
        </Title>
    );
}