import { FC } from 'react';
import Image from 'next/image';



import { Headline, HeadlineSize } from '../headline/Headline';
import styles from './About.module.scss';
import { Text, TextSize } from '../text/Text';
import Link from 'next/link';

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
                <li className={styles.item}>
                    <div className={styles.icon}></div>
                    <Headline
                        className={styles.title}
                        size={HeadlineSize.s}
                        headline='h3'
                    >My Journ</Headline>
                    <Text
                        size={TextSize.M}
                        className={styles.text}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quasi facere natus illo voluptas possimus voluptates quos pariatur. Quidem sint quia, ad fugit tempore totam harum quam explicabo iure error?
                    </Text>
                </li>
                <li className={styles.item}>
                    <div className={styles.icon}></div>
                    <Headline
                        className={styles.title}
                        size={HeadlineSize.s}
                        headline='h3'
                    >My Journ</Headline>
                    <Text
                        size={TextSize.M}
                        className={styles.text}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae at laboriosam exercitationem molestias in accusamus mollitia, illo ipsam ratione, aliquam illum deleniti magni consequuntur atque? Fugiat tempora nam mollitia voluptate.
                    </Text>
                </li>
                <li className={styles.item}>
                    <div className={styles.icon}></div>
                    <Headline
                        className={styles.title}
                        size={HeadlineSize.s}
                        headline='h3'
                    >My Journ</Headline>
                    <Text
                        size={TextSize.M}
                        className={styles.text}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta illum a est velit. Temporibus aliquam officia possimus a et! Quibusdam magnam facilis at aut accusantium! Iusto quae itaque consequuntur!
                    </Text>
                </li>
                <li className={styles.item}>
                    <div className={styles.icon}></div>
                    <Headline
                        className={styles.title}
                        size={HeadlineSize.s}
                        headline='h3'
                    >My Journ</Headline>
                    <Text
                        size={TextSize.M}
                        className={styles.text}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cum facilis dignissimos velit fugiat eveniet. Reprehenderit consectetur maxime sequi eaque, asperiores perferendis tempora saepe qui tempore mollitia error voluptatum distinctio?
                    </Text>
                </li>
            </ul>
        </section>
    );
}