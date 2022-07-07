import IconArrowLeft from "../public/icon-arrow-left.svg";
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext"
import Image from "next/image";

const ChatHeader = ({ channel, onBack }) => {
    const sbState = useSendbirdStateContext()
    const { user } = sbState.stores.userStore
    // console.log('user ', user.userId, user.nickname, user.profileUrl)

    return (
        <div className="custom-channel-header">
            <button onClick={onBack}>
            <Image width={20} heigth={20} src={IconArrowLeft} alt="Back button" />
            </button>
            <span>{channel.name? channel.name : `Group of ${channel.memberCount}`}</span>
            <span>{(user.nickname? user.nickname : user.userId) + `[${channel.memberCount}]`}</span>
        </div>
    )
}

export default ChatHeader;
