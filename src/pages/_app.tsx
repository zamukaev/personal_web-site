import Layout from '../components/layout/Layout';

import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout className={roboto.className} >
            <Component {...pageProps} />
        </Layout>
    )
}

export default App;