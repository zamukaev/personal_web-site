import { FC } from 'react';
import styles from './About.module.scss';

import classNames from 'classnames';
import React from 'react';
import { AboutMe } from './aboutMe/AboutMe';
import { AboutMeItems } from './aboutMeItems/AboutMeItems';

export interface AboutItem {
    id: number;
    icon: string;
    title: string;
    text: string;
    cls: string;
}
export interface AboutMe {
    id: number;
    title: string;
    image: string;
    text: string;
    cv: string;
}

export const aboutMe: AboutMe[] = [
    {
        id: 123,
        title: 'Über mich',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, illo explicabo nihil, odit dicta totam, ut esse provident aliquid quisquam voluptatem quam pariatur dolorem libero earum similique voluptate consectetur sint.',
        image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
        cv: 'cv/cv.pdf',

    }
];

export const aboutMeItem: AboutItem[] = [
    {
        id: 1,
        icon: '',
        title: 'Meine Reise',
        text: 'Nach meinem Umzug nach Deutschland Ende 2016 und den anfänglich schwierigen Jahren, in denen ich um mein Aufenthaltsrecht in Deutschland gekämpft habe, und nach meiner Integration in ein neues Land und eine neue Kultur, nachdem ich eine für mich neue Sprache erlernt habe, entschließe ich mich zu einer neuen Herausforderung.',
        cls: 'col1',
    },
    {
        id: 2,
        icon: '',
        title: 'Meine Leidenschaft',
        text: 'Als Philologe war ich immer von Sprachen und ihrer Struktur fasziniert, weshalb mich das Interesse an Programmiersprachen nie losgelassen hat. In meiner Freizeit habe ich mich intensiv mit Programmiersprachen beschäftigt und konnte bald erste Erfahrungen sammeln. Es wurde schnell deutlich, dass ich dies beruflich weiterverfolgen möchte.',
        cls: 'col2'
    },

    {
        id: 3,
        icon: '',
        title: 'Meine Suche',
        text: 'Schließlich entscheide ich mich, einen professionellen Programmierkurs zu besuchen. Bei meiner Suche bin ich auf Indisoft gestoßen. Nach erfolgreichem Abschluss meiner Weiterbildung bei Indisoft habe ich nicht innegehalten. Ich war als Freelancer tätig und habe in der Zwischenzeit zwei Bootcamps absolviert, eines am Fachinstitut für Informatik und Grafikdesign und ein weiteres bei Neue Fische.',
        cls: 'col3'
    },

    {
        id: 4,
        icon: '',
        title: 'Die Reise geht weiter',
        text: 'Mit dem Wissen und den Erfahrungen, die ich während meiner Reise in der IT-Welt gesammelt habe, fühle ich mich jetzt gut vorbereitet. Dennoch ist es für mich noch nicht genug. Es macht mir einfach zu viel Spaß, um einfach aufzuhören, mich weiterzubilden.',
        cls: 'col4'
    }
]

interface AboutProps {
    className?: string;
    aboutRef: any;
}

export const About: FC<AboutProps> = (props) => {
    const { className, aboutRef } = props;

    return (
        <section ref={aboutRef} className={styles.about}>
            {aboutMe.map((aboutItem: AboutMe) => (

                <AboutMe
                    key={aboutItem.id}
                    title={aboutItem.title}
                    text={aboutItem.text}
                    image={aboutItem.image}
                    cv={aboutItem.cv}
                />

            ))}
            <AboutMeItems
                aboutMeItem={aboutMeItem}
            />
        </section >
    );
}