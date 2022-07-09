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
    <div className='grid w-screen h-screen justify-center content-center p-0 m-0'>
        <div className='flex justify-center w-[100vw] h-[calc(100vh-60px)] bg-white'>
          <SendbirdProvider appId={appId} userId='call01'>
            {activeTab==='home' && (<Home />)}
            {activeTab==='news' && (<News />)}
            {activeTab==='group' && (<Group />)}
            {activeTab==='open' && (<Open />)}
            {activeTab==='account' && (<Account />)}
          </SendbirdProvider>
        </div>
        <div className='w-[100vw] h-[60px] bg-white'>
          <Navi activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    </div>
  )
}

export default Index
