import Image from "next/image";
import coverDefault from '../public/chat-room-alt.png'

const ChannelPreview = ({ channel, onChannelSelect }) => {
    return (
      <div
        className="channel-preview-wrapper"
        onClick={() => onChannelSelect(channel)}
      >
        <Image className="channel-preview-cover"
          width={40} height={40}
          src={channel.coverUrl? channel.coverUrl : coverDefault} />
        <div className="pl-2">
          <div className="channel-preview-name">{channel.name}</div>
          <div className="channel-preview-last-message">
            {channel.lastMessage?.messageType === "file"
              ? channel.lastMessage.name
              : channel.lastMessage?.message}
          </div>
        </div>
        <div className="channel-preview-last-message-date">
          {new Intl.DateTimeFormat("en-us", {
            month: "short",
            day: "2-digit"
          }).format(channel.lastMessage?.createdAt)}
        </div>
      </div>
    );
  };
  
  export default ChannelPreview;
  