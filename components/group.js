import ChannelList from '@sendbird/uikit-react/ChannelList'
import Channel from '@sendbird/uikit-react/Channel'
import ChatHeader from "../components/ChatHeader";
import ChannelPreview from "../components/ChannelPreview";

import { useState } from "react";

export default function Group() {
  const [channel, setChannel] = useState(null);

  const onChannelSelect = (_channel) => {
    setChannel(_channel);
  };

  const onBack = () => {
    setChannel(null);
  };

  return (
    <div className="App w-full h-full">
        {channel ? (
          <Channel
            channelUrl={channel.url}
            useReaction={true}
            renderChannelHeader={() => (
              <ChatHeader channel={channel} onBack={onBack} />
            )}
          />
        ) : (
          <ChannelList
            allowProfileEdit={true}
            renderChannelPreview={({channel}) => {
                if (!channel.lastMessage) {
                  setChannel(channel)
                  return null
                } else {
                  return (
                    <ChannelPreview
                      channel={channel}
                      onChannelSelect={onChannelSelect}
                    />
                  )
                }
              }
            }
          />
        )}
    </div>
  );
}