import { NextPage } from 'next';
import { memo } from 'react';

import AboutMe from './aboutMe/AboutMe';
import AboutMeItems from './aboutMeItems/AboutMeItems';

import { db } from '../../../db/db';
import { AboutMe as IAbout } from '../../../db/types';

import styles from './About.module.scss';


interface AboutProps {
    className?: string;
    aboutRef: any;
    locale?: string;
}

const About: NextPage<AboutProps> = (props) => {
    const { aboutRef, locale } = props;

    return (
        <section ref={aboutRef} className={styles.about}>
            {db[locale === "de" ? "de" : "en"].aboutMe.map((aboutItem: IAbout) => (
                <AboutMe
                    key={aboutItem.id}
                    title={aboutItem.title}
                    text={aboutItem.text}
                    image={aboutItem.image}
                    cv={aboutItem.cv}
                    locale={locale}
                />

            ))}
            <AboutMeItems
                aboutMeItem={db[locale === "de" ? "de" : "en"].aboutItems}
            />
        </section >
    );
}

export default memo(About);