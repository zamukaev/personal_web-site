import { FC } from 'react'

import styles from './AppLink.module.scss';
import Link from 'next/link';
import classNames from 'classnames';



export enum AppLinkTheme {
    OUTLINE_BTN = 'outline',
}
export enum AppLinkSize {
    L = 'l',
    M = 'm',
    S = 's',
}
interface AppLinkProps {
    className?: string;
    href?: string;
    blank?: boolean;
    children?: React.ReactNode;
    size?: AppLinkSize;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        href = '/',
        blank = false,
        size = AppLinkSize.S,
        theme = AppLinkTheme.OUTLINE_BTN
    } = props;

    return (
        <Link href={href} target={blank ? '_blank' : ''} className={classNames(styles.appLink, styles[theme], styles[size])}>
            {children}
        </Link>
    );
}