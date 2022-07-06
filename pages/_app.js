import '../styles/globals.css'

import Navi from '../components/Navi'

function MyApp({ Component, pageProps }) {
  return (
    <div className='grid w-screen h-screen justify-center content-center'>
      <div className='grid justify-center content-center rounded-3xl w-[420px] h-[780px] bg-stone-700'>
        <div className='rounded-t-md w-[400px] h-[670px] bg-white'>
          <Component {...pageProps} />
        </div>
        <div className='rounded-b-md w-[400px] h-[60px] bg-white'>
          <Navi name='home' />
        </div>
      </div>
    </div>
  )
}

export default MyApp
