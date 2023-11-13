import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";

import styles from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    CIRCLES = 'circles',
    OUTLINE_RED = 'outlineRed',
}

export enum Size {
    L = 'l',
    M = 'm',
    s = 's',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: ThemeButton;
    size?: Size;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ThemeButton.CLEAR,
        children,
        size = '',
        ...otherProps } = props;
    return (
        <button type="button"
            className={classNames(styles.button, styles[theme], [styles[size]], className)}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default Button;