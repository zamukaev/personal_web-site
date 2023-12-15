import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { Loader } from '@/components/loader/Loader';

import '@/styles/globals.scss';
import Header from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

function App({ Component, pageProps }: AppProps) {
    const skillRef = useRef<any>();
    const workRef = useRef<any>();
    const aboutRef = useRef<any>();
    const homeRef = useRef<any>();
    const contactRef = useRef<any>();

    const scrollToSection = (section: string) => {
        if (section === 'skill') {
            skillRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'portfolio') {
            workRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'about me') {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'home') {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'contact') {
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    };

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <Loader />
    }

    return (
        <Layout className={roboto.className} >
            <Header locale={pageProps.locale} onScrollToSection={scrollToSection} homeRef={homeRef} />
            <Component
                onScrollToSection={scrollToSection}
                skillRef={skillRef}
                workRef={workRef}
                aboutRef={aboutRef}
                contactRef={contactRef}
                {...pageProps}
            />
            <Footer locale={pageProps.locale} />
        </Layout>
    )
}

export default appWithTranslation(App);