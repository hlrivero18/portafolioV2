import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Head from 'next/head'
import preview from '../img/vistaPrevia.png'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hector Luis Rivero</title>
        <meta property='og:title' content='Hey! mi nombre es Hector!'/>
        <meta property='og:description' content='Portafolio web'/>
        <meta property='og:image' content='https://scontent.ffdo5-1.fna.fbcdn.net/v/t1.15752-9/442469012_333481033103092_4827458280289801796_n.png?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE_lARBu-dXyZ1vHFpNWy2BEzNNe2nDRUMTM017acNFQ_kfXJJAWA5vvyGd9w6umZ2nSC6fLSZFA94NchkzkxwX&_nc_ohc=ST3QO2sSNUMQ7kNvgFCIw0k&_nc_ht=scontent.ffdo5-1.fna&oh=03_Q7cD1QFaZ9SRO1HgKjJDlpdVAyDSShiw3r8JwQGtvScOpMTWNA&oe=667DE1F3'/>
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>

  )
}
