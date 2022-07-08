import Navi from '../components/Navi'
import dynamic from 'next/dynamic'
const SendbirdProvider = dynamic(() => import('@sendbird/uikit-react/SendbirdProvider'), {
  ssr: false
})
import Home from '../components/home'
import News from '../components/news'
const Group = dynamic(() => import('../components/group'), {ssr: false})
const Open = dynamic(() => import('../components/open'), {ssr: false})
const Account = dynamic(() => import('../components/account'), {ssr: false})

import { useState } from 'react'

function Index({ pageProps }) {
  const appId = process.env.NEXT_PUBLIC_APP_ID

  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className='grid w-screen h-screen justify-center content-center'>
      <div className='grid justify-center content-center rounded-3xl w-[420px] h-[780px] bg-stone-700'>
        <div className='rounded-t-md w-[400px] h-[670px] bg-white'>
          <SendbirdProvider appId={appId} userId='call01'>
            {activeTab==='home' && (<Home />)}
            {activeTab==='news' && (<News />)}
            {activeTab==='group' && (<Group />)}
            {activeTab==='open' && (<Open />)}
            {activeTab==='account' && (<Account />)}
          </SendbirdProvider>
        </div>
        <div className='rounded-b-md w-[400px] h-[60px] bg-white'>
          <Navi activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  )
}

export default Index
