import { FC } from 'react';
import Image from 'next/image';



import { Headline, HeadlineSize } from '../headline/Headline';
import styles from './About.module.scss';
import { Text, TextSize } from '../text/Text';


export const about = [
    { id: 1, icon: '', title: 'Meine Reise', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, illo explicabo nihil, odit dicta totam, ut esse provident aliquid quisquam voluptatem quam pariatur dolorem libero earum similique voluptate consectetur sint.' },
    { id: 2, icon: '', title: 'Meine Leidenschaft', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, illo explicabo nihil, odit dicta totam, ut esse provident aliquid quisquam voluptatem quam pariatur dolorem libero earum similique voluptate consectetur sint.' },
    { id: 3, icon: '', title: 'Meine Suche', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, illo explicabo nihil, odit dicta totam, ut esse provident aliquid quisquam voluptatem quam pariatur dolorem libero earum similique voluptate consectetur sint.' },
    { id: 4, icon: '', title: 'Die Reise geht weiter', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, illo explicabo nihil, odit dicta totam, ut esse provident aliquid quisquam voluptatem quam pariatur dolorem libero earum similique voluptate consectetur sint.' }
];

interface AboutProps {
    className?: string;
}

export const About: FC<AboutProps> = (props) => {
    const { className } = props;

    return (
        <section className={styles.about}>
            <div className={styles.top}>
                <div className={styles.avatar}>
                    <Image
                        className={styles.img}
                        src={'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'}
                        alt='' width={370} height={300} />
                </div>
                <div className={styles.aboutMe}>
                    <Headline
                        className={styles.title}
                        size={HeadlineSize.M}
                        headline='h2'
                    >
                        Über mich
                    </Headline>
                    <Text size={TextSize.M} className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, illo explicabo nihil, odit dicta totam, ut esse provident aliquid quisquam voluptatem quam pariatur dolorem libero earum similique voluptate consectetur sint.
                    </Text>
                    <Text
                        size={TextSize.M}
                        className={styles.secondText}
                    >
                        Öffnen sie meinen
                        <a href="cv/cv.pdf" target='_blank'><span className={styles.cv}> CV</span>  </a>
                    </Text>
                </div>
            </div>
            <ul className={styles.footer}>
                {about.map((item) => (
                    <li key={item.id} className={styles.item}>
                        <div className={styles.icon}></div>
                        <Headline
                            className={styles.title}
                            size={HeadlineSize.s}
                            headline='h3'
                        >{item.title}</Headline>
                        <Text
                            size={TextSize.M}
                            className={styles.text}>
                            {item.text}
                        </Text>
                    </li>
                ))}
            </ul>
        </section>
    );
}