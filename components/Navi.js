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

const Navi = ({activeTab, setActiveTab}) => {
    return (
        <div className='w-full h-full flex justify-around items-center'>
            <div className={tabClass}>
                <div className={imgContainerClass}>
                    <Image className={imgClass}
                        src={activeTab==='home'? homeSel:home}
                        onClick={() => setActiveTab('home')}
                    />
                </div>
            </div>
            <div className={tabClass}>
                {activeTab === 'news' ?
                    <RiNewspaperFill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTab('news')}
                    /> :
                    <RiNewspaperLine
                        size='35'
                        color='#000'
                        onClick={() => setActiveTab('news')}
                    />}
            </div>
            <div className={tabClass}>
                {activeTab === 'group' ?
                    <RiGroup2Fill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTab('group')}
                    /> :
                    <RiGroup2Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTab('group')}
                    />}
            </div>
            <div className={tabClass}>
                {activeTab === 'open' ?
                    <AiFillPlaySquare
                        size='35'
                        color='#000'
                        onClick={() => setActiveTab('open')}
                    /> :
                    <AiOutlinePlaySquare
                        size='35'
                        color='#000'
                        onClick={() => setActiveTab('open')}
                    />}
            </div>
            <div className={tabClass}>
                {activeTab === 'account' ?
                    <RiUser5Fill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTab('account')}
                    /> :
                    <RiUser5Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTab('account')}
                    />}
            </div>
        </div>
    )
}

export default Navi