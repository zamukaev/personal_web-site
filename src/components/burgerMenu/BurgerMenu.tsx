import { NextPage } from 'next';
import { memo } from 'react';

import { Portal } from '../portal/Portal';
import Navbar from '../navbar/Navbar';
import LangSwitcher from '../langSwitcher/LangSwitcher';

import classNames from 'classnames';
import styles from './BurgerMenu.module.scss';



interface BurgerMenuProps {
    className?: string;
    isMounted?: boolean
    onScrollToSection: (section: string) => void;
}

const BurgerMenu: NextPage<BurgerMenuProps> = (props) => {
    const {
        onScrollToSection,
        isMounted,
    } = props;

    return (
        <Portal>
            <section className={classNames(styles.burgerMenu, { [styles.mounted]: isMounted })}>
                <Navbar
                    isMounted={isMounted}
                    className={classNames({ [styles.mounted]: isMounted })}
                    onScrollToSection={onScrollToSection}
                />
                <LangSwitcher />
            </section>
        </Portal>
    );
}

export default memo(BurgerMenu);