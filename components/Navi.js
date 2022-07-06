import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import {
    RiUser5Line, RiUser5Fill,
    RiNewspaperFill, RiNewspaperLine
} from 'react-icons/ri'

import Image from 'next/image'
import homeSel from '../public/homeSel.png'
import home from '../public/home.png'

const imgContainerClass =
  'flex items-center rounded-full w-[35px] border-solid border-2 border-yellow-100'
const imgClass = 'rounded-full'
const tabClass = 'flex items-center w-[35px]'

const Navi = props => {
    const router = useRouter()
    const [activeTabs, setActiveTabs] = useState(props.name)
    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                router.push('/home')
                break;
            case 'news':
                router.push('/news')
                break;
            case 'saved':
                router.push('/saved')
                break;
            case 'account':
                router.push('/account')
                break;
            default:
                router.push('/home')
                break;
        }
    }, [activeTabs, router])

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className={tabClass}>
                <div className={imgContainerClass}>
                    <Image className={imgClass}
                        src={activeTabs==='home'? homeSel:home}
                        onClick={() => setActiveTabs('home')}
                    />
                </div>
            </div>
            <div className={tabClass}>
                {activeTabs === 'news' ?
                    <RiNewspaperFill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('news')}
                    /> :
                    <RiNewspaperLine
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('news')}
                    />}
            </div>
            <div className={tabClass}>
                {activeTabs === 'saved' ?
                    <AiFillHeart
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('saved')}
                    /> :
                    <AiOutlineHeart
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('saved')}
                    />}
            </div>
            <div className={tabClass}>
                {activeTabs === 'account' ?
                    <RiUser5Fill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('account')}
                    /> :
                    <RiUser5Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('account')}
                    />}
            </div>
        </div>
    )
}

export default Navi