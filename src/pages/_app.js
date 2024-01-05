import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hector Luis River</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>

  )
}
