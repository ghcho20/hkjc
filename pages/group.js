import '@sendbird/uikit-react/dist/index.css'
import ChannelList from '@sendbird/uikit-react/ChannelList'
import Channel from '@sendbird/uikit-react/Channel'
import ChatHeader from "../components/ChatHeader";
import ChannelPreview from "../components/ChannelPreview";

import { useState } from "react";

export default function App() {
  const [channel, setChannel] = useState(null);

  const onChannelSelect = (_channel) => {
    setChannel(_channel);
  };

  const onBack = () => {
    setChannel(null);
  };

  return (
    <div className="App">
        {channel ? (
          <Channel
            channelUrl={channel.url}
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