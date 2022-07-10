import IconArrowLeft from "../public/icon-arrow-left.svg";
import Image from "next/image";
import Live from '../public/live.gif'

import { AiFillSetting } from 'react-icons/ai'
import { AiOutlineFileSearch } from "react-icons/ai";

const ChatHeader = ({ channel,
                      onBack,
                      setSettings,
                      setShowSearch }) => {
    return (<div className='flex flex-col'>
        <div className="custom-channel-header">
            <button onClick={onBack}>
            <Image width={20} heigth={20} src={IconArrowLeft} alt="Back button" />
            </button>
            <span>{channel.name? channel.name : `Group of ${channel.memberCount}`}</span>
            <span className="inline-flex space-x-4">
            {setShowSearch && (
                    <AiOutlineFileSearch size={30} color='blueviolet'
                    onClick={() => setShowSearch(true)}
                />
            )}
            <AiFillSetting size={30} color='blueviolet'
                onClick={() => setSettings(true)}
            />
            </span>
        </div>
        {channel.channelType==='open' && (<div className='mb-5'>
            <Image layout='responsive' src={Live} />
        </div>)}
    </div>)
}

export default ChatHeader;
