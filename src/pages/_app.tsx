import Layout from '../components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import '../config/i18n/i18n';
import { Suspense } from 'react';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (

    <Layout className={roboto.className} >
      <Component {...pageProps} />
    </Layout>

  )
}
