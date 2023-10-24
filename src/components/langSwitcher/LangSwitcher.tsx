import { FC } from "react";
import Button, { ThemeButton } from "../button/Button";
import classNames from "classnames";

import { useTranslation } from "react-i18next";

import DeIcons from "../../assets/icons/de.svg";
import EnIcons from "../../assets/icons/en.svg";


import styles from "./LangSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

const LangSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
    }
    return (
        <Button
            className={classNames(styles.langSwitcher, className)}
            onClick={toggle}
            theme={ThemeButton.CLEAR}>
            {i18n.language === 'de' ? <EnIcons /> : <DeIcons />}
        </Button>
    );
}

export default LangSwitcher;