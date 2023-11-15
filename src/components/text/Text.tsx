import { FC, ReactNode } from 'react'

import styles from './Text.module.scss';
import classNames from 'classnames';

export enum TextTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
    INFO = 'info'
}
export enum TextSize {
    M = 'm',
    L = 'l',
    XL = 'xl'
}

interface TextProps {
    className?: string;
    size?: TextSize;
    theme?: TextTheme;
    children?: ReactNode;
}

export const Text: FC<TextProps> = (props) => {
    const {
        className,
        children,
        size = TextSize.L,
        theme = TextTheme.PRIMARY
    } = props;

    return (
        <p className={classNames(styles.text, styles[theme], styles[size], className)}>
            {children}
        </p>
    );
}