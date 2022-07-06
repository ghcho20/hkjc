import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AiFillPlaySquare, AiOutlinePlaySquare } from 'react-icons/ai'
import {
    RiUser5Line, RiUser5Fill,
    RiNewspaperFill, RiNewspaperLine,
    RiGroup2Fill, RiGroup2Line
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
            case 'group':
                router.push('/group')
                break;
            case 'open':
                router.push('/open')
                break;
            case 'account':
                router.push('/account')
                break;
            default:
                router.push('/home')
                break;
        }
    }, [activeTabs])

    return (
        <div className='w-full h-full flex justify-around items-center'>
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
                {activeTabs === 'group' ?
                    <RiGroup2Fill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('group')}
                    /> :
                    <RiGroup2Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('group')}
                    />}
            </div>
            <div className={tabClass}>
                {activeTabs === 'open' ?
                    <AiFillPlaySquare
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('open')}
                    /> :
                    <AiOutlinePlaySquare
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('open')}
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