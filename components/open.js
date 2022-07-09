import OpenChannel from '@sendbird/uikit-react/OpenChannel'
import { OpenChannelProvider } from '@sendbird/uikit-react/OpenChannel/context'
import OpenChannelUI from '@sendbird/uikit-react/OpenChannel/components/OpenChannelUI'
import OpenChannelSettings from '@sendbird/uikit-react/OpenChannelSettings'

import { useState } from "react";

import ChatHeader from "./ChatHeader";
import ChannelPreview from "./ChannelPreview";
import OpenChannelList from "./OpenChannelList"

export default function Open() {
  const [channel, setChannel] = useState(null)
  const [settings, setSettings] = useState(false)

  return (
    <div className="App w-full h-full">
        {!settings && channel && (
          <OpenChannelProvider
            channelUrl={channel.url}
            useMessageGrouping={true}
            disableUserProfile={false}
          >
            <OpenChannelUI
                renderHeader={() => (
                <ChatHeader
                    channel={channel}
                    onBack={() => setChannel(null)}
                    setSettings={setSettings}
                />
                )}
            />
          </OpenChannelProvider>
        )}
        {!settings && !channel && (
          <OpenChannelList
            renderChannelPreview={({channel}) => {
                return (
                    <ChannelPreview
                        key={channel.url}
                        channel={channel}
                        onChannelSelect={(_ch) => setChannel(_ch)}
                    />
                )
              }
            }
          />
        )}
        {settings && (
          <OpenChannelSettings
            channelUrl={channel.url}
            disableUserProfile={false}
            onCloseClick={() => setSettings(false)}
            onDeleteChannel={() => {
                setSettings(false)
                setChannel(null)
            }}
          />
        )}
    </div>
  );
}