import { FC } from 'react';
import Image from 'next/image';
import styles from './About.module.scss';
import { Headline } from '../headline/Headline';


interface AboutProps {
    className?: string;
}

export const About: FC<AboutProps> = (props) => {
    const { className } = props;

    return (
        <section className={styles.about}>
            <div className={styles.top}>
                <div className={styles.avatar}>
                    <Image className={styles.img} src={'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'} alt='' width={170} height={100} />
                </div>
                <div className={styles.aboutMe}>
                    <Headline>Über mich</Headline>
                    <p className={styles.text}>
                        Ich bin ein Frontend-Entwickler mit technischem Hintergrund, der es liebt, Grenzen zu überschreiten
                    </p>
                    <p className={styles.cv}>Öffnen sie meinen <span>CV</span></p>
                </div>
            </div>
            <ul className={styles.footer}>
                <li className={styles.item}>
                    <div className={styles.icon}></div>
                    <Headline>My Journ</Headline>
                    <p className={styles.text}>
                        My journey begins with an apprenticeship as a Polymechanic EFZ.
                    </p>
                </li>
                <li className={styles.item}>
                    <div className={styles.icon}></div>
                    <Headline>My Journ</Headline>
                    <p className={styles.text}>
                        My journey begins with an apprenticeship as a Polymechanic EFZ.
                    </p>
                </li>
                <li className={styles.item}>
                    <div className={styles.icon}></div>
                    <Headline>My Journ</Headline>
                    <p className={styles.text}>
                        My journey begins with an apprenticeship as a Polymechanic EFZ.
                    </p>
                </li>
                <li className={styles.item}>
                    <div className={styles.icon}></div>
                    <Headline>My Journ</Headline>
                    <p className={styles.text}>
                        My journey begins with an apprenticeship as a Polymechanic EFZ.
                    </p>
                </li>
            </ul>
        </section>
    );
}