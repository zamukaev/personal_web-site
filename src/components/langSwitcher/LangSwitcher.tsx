import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Button, { ThemeButton } from '../button/Button';

import De from '../../assets/icons/de.png';
import En from '../../assets/icons/en.png';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: NextPage<LangSwitcherProps> = () => {
    const router = useRouter();

    const changeLangHandler = (value: string) => {
        router.push(
            {
                pathname: router.pathname,
                query: router.query,
            },
            undefined,
            { locale: value }
        )
    }
    return (
        <section className={styles.langSwitcher}>
            <Button
                className={styles.btn}
                onClick={() => changeLangHandler('en')}
                theme={ThemeButton.CLEAR}
            >
                <Image src={En} height={20} width={20} alt='icon' />
            </Button>
            <Button
                onClick={() => changeLangHandler('de')}
                theme={ThemeButton.CLEAR}
            >
                <Image src={De} height={20} width={20} alt='icon' />
            </Button>
        </section>
    );
}