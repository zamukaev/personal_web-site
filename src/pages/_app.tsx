import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import { useState, useEffect } from 'react';

import Layout from '@/components/layout/Layout';
import { Loader } from '@/components/loader/Loader';

import '@/styles/globals.scss';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

function App({ Component, pageProps }: AppProps) {

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <Loader />
    }

    return (
        <Layout className={roboto.className} >
            <Component {...pageProps} />
        </Layout>
    )
}

export default appWithTranslation(App);