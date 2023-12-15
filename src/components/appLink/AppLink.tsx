import { NextPage } from 'next';
import Link, { LinkProps } from 'next/link';

import classNames from 'classnames';
import styles from './AppLink.module.scss';

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
    theme?: AppLinkTheme;
    rel?: string;

}

export const AppLink: NextPage<AppLinkProps> = (props) => {
    const {
        className,
        children,
        blank = false,
        size = AppLinkSize.S,
        theme = AppLinkTheme.OUTLINE_BTN,
        ...otherProps
    } = props;

    return (
        <Link target={blank ? '_blank' : ''} className={classNames(styles.appLink, styles[theme], styles[size], className)}{...otherProps}>
            {children}
        </Link>
    );
}