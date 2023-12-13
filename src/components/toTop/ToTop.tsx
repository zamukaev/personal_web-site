import { NextPage } from 'next';
import { memo } from 'react';
import { RiArrowUpDoubleLine } from 'react-icons/ri';

import Button, { ThemeButton } from '@/components/button/Button';
import { Portal } from '@/components/portal/Portal';

import classNames from 'classnames';
import styles from './ToTop.module.scss';


interface ToTopProps {
    className?: string;
    isVisible?: boolean;
    onScrollToSection: (section: string) => void;
}

const ToTop: NextPage<ToTopProps> = (props) => {
    const { isVisible, onScrollToSection } = props;

    return (
        <Portal>
            <Button onClick={() => onScrollToSection('home')} className={classNames(styles.toTop, { [styles.visible]: isVisible })} theme={ThemeButton.CIRCLES} >
                <RiArrowUpDoubleLine className={styles.arrow} />
            </Button>
        </Portal>
    );
}

export default memo(ToTop);