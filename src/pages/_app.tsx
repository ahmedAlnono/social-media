// import Model from '@/components/Model'
import LoginModel from '@/components/Models/LoginModel'
import RegisterModel from '@/components/Models/RegisterModel'
import Layout from '@/components/layout'
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster/>
    <RegisterModel/>
    <LoginModel/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}
