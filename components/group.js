import ChannelList from '@sendbird/uikit-react/ChannelList'
import Channel from '@sendbird/uikit-react/Channel'
import ChatHeader from "../components/ChatHeader";
import ChannelPreview from "../components/ChannelPreview";
import ChannelSettings from '@sendbird/uikit-react/ChannelSettings'
import LeaveChannel from '@sendbird/uikit-react/ChannelSettings/components/LeaveChannel'

import { useState } from "react";

export default function Group() {
  const [channel, setChannel] = useState(null)
  const [settings, setSettings] = useState(false)

  const onChannelSelect = (_channel) => {
    setChannel(_channel);
  };

  const onBack = () => {
    setChannel(null);
  };

  return (
    <div className="App w-full h-full">
        {!settings && channel && (
          <Channel
            channelUrl={channel.url}
            useReaction={true}
            renderChannelHeader={() => (
              <ChatHeader
                channel={channel}
                onBack={onBack}
                setSettings={setSettings}
              />
            )}
          />
        )}
        {!settings && !channel && (
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
        {settings && (
          <ChannelSettings
            channelUrl={channel.url}
            onCloseClick={() => setSettings(false)}
          />
        )}
    </div>
  );
}