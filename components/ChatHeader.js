import IconArrowLeft from "../public/icon-arrow-left.svg";
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext"
import Image from "next/image";

import { AiFillSetting } from 'react-icons/ai'
import { AiOutlineFileSearch } from "react-icons/ai";

const ChatHeader = ({ channel, onBack, setSettings }) => {
    const sbState = useSendbirdStateContext()
    const { user } = sbState.stores.userStore
    // console.log('user ', user.userId, user.nickname, user.profileUrl)

    return (
        <div className="custom-channel-header">
            <button onClick={onBack}>
            <Image width={20} heigth={20} src={IconArrowLeft} alt="Back button" />
            </button>
            <span>{channel.name? channel.name : `Group of ${channel.memberCount}`}</span>
            <span className="inline-flex space-x-4">
            <AiOutlineFileSearch size={30} color='blueviolet'
                onClick={() => {
                }}
            />
            <AiFillSetting size={30} color='blueviolet'
                onClick={() => setSettings(true)}
            />
            </span>
        </div>
    )
}

export default ChatHeader;
