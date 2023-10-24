import { FC, ReactNode } from 'react'

import styles from './SkillsItem.module.scss';


interface SkillsItemProps {
    className?: string;
    firstSkillsRow?: boolean;
    secondSkillsRow?: boolean;
    therdSkillsRow?: boolean;
    icon: any;
    text?: string;
}

export const SkillsItem: FC<SkillsItemProps> = (props) => {
    const {
        className,
        firstSkillsRow,
        secondSkillsRow,
        therdSkillsRow,
        icon,
        text
    } = props;
    const Icon = icon;

    return (
        <li
            className={`
                        ${styles.skillItem}
                        ${firstSkillsRow && styles.firstRowActive}
                        ${secondSkillsRow && styles.secondRowActive}
                        ${therdSkillsRow && styles.therdRowActive}
                        `}>
            <span className={styles.content}>
                {text}
            </span>
            <span className={styles.icon}>
                {<Icon />}
            </span>
        </li>
    );
}