import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hector Luis Rivero</title>
        <meta property='og:title' content='Hey! mi nombre es Hector!'/>
        <meta property='og:description' content='Portafolio web'/>
        <meta property='og:image' content='../img/vistaPrevia.png'/>
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>

  )
}
