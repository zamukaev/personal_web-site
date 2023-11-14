import { FC, useState } from 'react'
import { Portal } from '../portal/Portal';
import Navbar from '../navbar/Navbar';
import classNames from 'classnames';
import Button, { ThemeButton } from '../button/Button';
import styles from './BurgerMenu.module.scss';
import { isUndefined } from '@/utils/isUndefined';

interface BurgerMenuProps {
    className?: string;
    isMounted?: boolean
    onScrollToSection: (section: string) => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = (props) => {
    const {
        className,
        onScrollToSection,
        isMounted,
    } = props;

    return (
        <Portal>
            <section className={classNames(styles.burgerMenu, { [styles.mounted]: isMounted })}>
                <Navbar isMounted={isMounted} className={classNames({ [styles.mounted]: isMounted })} onScrollToSection={onScrollToSection} />

            </section>
        </Portal>
    );
} 