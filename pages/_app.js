import '../styles/globals.css'

import Navi from '../components/Navi'
import dynamic from 'next/dynamic'
const SendbirdProvider = dynamic(() => import('@sendbird/uikit-react/SendbirdProvider'), {
  ssr: false
})

function MyApp({ Component, pageProps }) {
  const appId = process.env.NEXT_PUBLIC_APP_ID

  return (
    <div className='grid w-screen h-screen justify-center content-center'>
      <div className='grid justify-center content-center rounded-3xl w-[420px] h-[780px] bg-stone-700'>
        <div className='rounded-t-md w-[400px] h-[670px] bg-white'>
          <SendbirdProvider appId={appId} userId='call01'>
            <Component {...pageProps} />
          </SendbirdProvider>
        </div>
        <div className='rounded-b-md w-[400px] h-[60px] bg-white'>
          <Navi name='home' />
        </div>
      </div>
    </div>
  )
}

export default MyApp
