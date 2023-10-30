import { FC } from 'react'

import styles from './AppLink.module.scss';
import Link, { LinkProps } from 'next/link';
import classNames from 'classnames';



export enum AppLinkTheme {
    OUTLINE_BTN = 'outline',
    CLEAR = 'clear',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
export enum AppLinkSize {
    L = 'l',
    M = 'm',
    S = 's',
}
interface AppLinkProps extends LinkProps {
    className?: string;
    blank?: boolean;
    children?: React.ReactNode;
    size?: AppLinkSize;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        blank = false,
        size = AppLinkSize.S,
        theme = AppLinkTheme.OUTLINE_BTN,
        ...otherProps
    } = props;

    return (
        <Link target={blank ? '_blank' : ''} className={classNames(styles.appLink, styles[theme], styles[size])}{...otherProps}>
            {children}
        </Link>
    );
}