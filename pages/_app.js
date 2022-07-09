import '../styles/globals.css'
import '@sendbird/uikit-react/dist/index.css'
import '../styles/sendbird.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const title = process.env.NEXT_PUBLIC_WINDOW_TITLE
  console.log('title: ', title)
  return <div>
      <Head><title>{title}</title></Head>
      <Component {...pageProps} />
    </div>
}

export default MyApp
