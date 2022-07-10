import IconArrowLeft from "../public/icon-arrow-left.svg";
import Image from "next/image";
import Live1 from '../public/live1.gif'
import Live2 from '../public/live2.gif'
import Live3 from '../public/live3.gif'
import Live4 from '../public/live4.gif'
import Live5 from '../public/live5.gif'

import { AiFillSetting } from 'react-icons/ai'
import { AiOutlineFileSearch } from "react-icons/ai";

import { useState } from "react";

const liveEvents = [Live1, Live2, Live3, Live4, Live5]

const ChatHeader = ({ channel,
                      onBack,
                      setSettings,
                      setShowSearch }) => {
    const [eventId, setEventId] = useState(null)
    if (channel.channelType==='open' && !eventId) {
        const seed = channel.url.slice(-1)
        const eid = parseInt(seed) % 5
        setEventId(eid + 1)
    }
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
            <Image layout='responsive' src={liveEvents[eventId-1]} />
        </div>)}
    </div>)
}

export default ChatHeader;
