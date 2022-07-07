import '@sendbird/uikit-react/dist/index.css'
import ChannelList from '@sendbird/uikit-react/ChannelList'
import Channel from '@sendbird/uikit-react/Channel'
import ChatHeader from "../components/ChatHeader";
import ChannelPreview from "../components/ChannelPreview";

import { useState, useEffect } from "react";

export default function App() {
  const [channel, setChannel] = useState(null);

  const onChannelSelect = (_channel) => {
    setChannel(_channel);
    window.history.pushState({}, _channel.name, "/" + _channel.url);
  };

  const onBack = () => {
    setChannel(null);
    window.history.pushState({}, document.title, "/");
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
            renderChannelPreview={({channel}) => (
              <ChannelPreview
                channel={channel}
                onChannelSelect={onChannelSelect}
              />
            )}
          />
        )}
    </div>
  );
}