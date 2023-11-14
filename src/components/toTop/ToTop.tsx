import { FC } from 'react'

import Button, { Size, ThemeButton } from '../button/Button';
import classNames from 'classnames';
import { RiArrowUpDoubleLine } from 'react-icons/ri';
import styles from './ToTop.module.scss';
import { Portal } from '../portal/Portal';
import { isUndefined } from '../../utils/isUndefined';



interface ToTopProps {
    className?: string;
    isVisible?: boolean;
    onScrollToSection: (section: string) => void;
}

export const ToTop: FC<ToTopProps> = (props) => {
    const { className, isVisible, onScrollToSection } = props;
    const doc = isUndefined('doc');
    return (
        <Portal element={doc!.body}>
            <Button onClick={() => onScrollToSection('home')} className={classNames(styles.toTop, { [styles.visible]: isVisible })} theme={ThemeButton.CIRCLES} >
                <RiArrowUpDoubleLine className={styles.arrow} />
            </Button>
        </Portal>

    );
}