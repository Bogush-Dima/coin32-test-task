import Head from "next/head"
import { GlobalStyle } from "./globalStyles"

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Coin32 Test Task</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default MyApp
