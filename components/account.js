import Image from 'next/image'
import coverDefault from '../public/chat-room-alt.png'
import { RiEdit2Line } from 'react-icons/ri'
import Logo from '../public/account_logo.png'
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext"
import EditUserProfile from '@sendbird/uikit-react/EditUserProfile'
import { useState } from 'react'

export default function Account({userId, setUserId}) {
    const { user } = useSendbirdStateContext().stores.userStore
    const [showSettings, setShowSettings] = useState(false)

    return (
        <>
            {!userId && (<div className='flex flex-col w-full h-[80%] \
                justify-start items-center text-xl'>
                <div className='flex flex-col h-[70%] justify-center'>
                    <Image className='w-full' src={Logo} />
                </div>
                <div className='flex flex-col w-full h-full justify-center items-center'>
                    <input className="border-2 w-[75%] text-center mb-2 rounded-md"
                        placeholder="user ID"
                        id='account_user_id' />
                    <input className="border-2 w-[75%] text-center mb-4 rounded-md"
                        placeholder="password" type="password"
                        id='account_user_password' />
                    <div className='flex flex-row w-[75%]'>
                        <div className='flex flex-row w-[50%] justiy-start items-center'>
                            <div className='mr-2 text-gray-600 font-serif'>
                                Remember Me</div>
                            <input type='checkbox' />
                        </div>
                        <div className='flex flex-row w-[50%] justify-end items-center'>
                            <div className='font-serif text-purple-300 hover:text-purple-700'>
                                Forgot Password?</div>
                        </div>
                    </div>
                    <button className=
                            'bg-transparent hover:bg-purple-700 \
                            border rounded-md border-purple-700 shadow \
                            font-serif text-purple-700 hover:text-white \
                            pl-9 pr-9 pt-1 pb-1 mt-14'
                            onClick={() => {
                                const uid = document.getElementById('account_user_id')
                                const pwd = document.getElementById('account_user_password')
                                if (uid.value !== '' && pwd.value !== '') {
                                    setUserId(uid.value)
                                }
                            }}>
                        Log in
                    </button>
                </div>
            </div>)}
            {userId && (<div className='flex flex-col justify-end w-full h-full'>
                <iframe className='w-full h-full' frameBorder="0"
                    src="https://corporate.hkjc.com/corporate/english/index.aspx"></iframe>
                <div className='flex flex-row justify-center items-center \
                    w-[calc(100% - 20px)] \
                    border rounded-md m-[10px]'
                >
                    {user.profileUrl ?
                        (<img className='channel-preview-cover'
                            width={64} height={64} src={user.profileUrl} />) :
                        (<Image className='channel-preview-cover'
                            width={64} height={64} src={coverDefault} />)
                    }
                    <div className='font-serif mr-7'>
                        {user.nickname ? `${user.userId} / ${user.nickname}` : user.userId}
                    </div>
                    <RiEdit2Line
                        size='35'
                        color='indigo'
                        onMouseOver={({target}) => target.style.color='blueviolet'}
                        onMouseOut={({target}) => target.style.color='indigo'}
                        onClick={() => setShowSettings(true)}
                    />
                </div>
            </div>)}
            {showSettings && <EditUserProfile
                onCancel={() => setShowSettings(false)}
                onEditProfile={() => setShowSettings(false)}
            />}
        </>
    )
}