import { NextPage } from 'next';
import { memo } from 'react';
import { useInView } from 'react-intersection-observer';

import classNames from 'classnames';
import styles from './SkillsItem.module.scss';


interface SkillsItemProps {
    className?: string;
    icon: any;
    text?: string;
}

const SkillsItem: NextPage<SkillsItemProps> = (props) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    const {
        icon,
        text
    } = props;

    const Icon = icon;

    return (
        <li ref={ref} className={classNames(styles.skillItem, { [styles.mounted]: inView })}>
            <span className={styles.content}>
                {text}
            </span>
            <span className={styles.icon}>
                {<Icon />}
            </span>
        </li>
    );
}
export default memo(SkillsItem)