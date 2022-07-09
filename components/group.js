import ChannelList from '@sendbird/uikit-react/ChannelList'
import Channel from '@sendbird/uikit-react/Channel'
import ChannelSettings from '@sendbird/uikit-react/ChannelSettings'
import MessageSearch from '@sendbird/uikit-react/MessageSearch'

import { useState } from "react";

import ChatHeader from "./ChatHeader";
import ChannelPreview from "./ChannelPreview";

export default function Group() {
  const [channel, setChannel] = useState(null)
  const [settings, setSettings] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [startingPoint, setStartingPoint] = useState(0)
  const [highlightedMessage, setHighlightedMessage] = useState(0)

  return (
    <div className="App w-full h-full">
        {!settings && !showSearch && channel && (
          <Channel
            channelUrl={channel.url}
            useReaction={true}
            replyType='QUOTE_REPLY'
            useMessageGrouping={true}
            highlightedMessage={highlightedMessage}
            startingPoint={startingPoint}
            renderChannelHeader={() => (
              <ChatHeader
                channel={channel}
                onBack={() => setChannel(null)}
                setSettings={setSettings}
                setShowSearch={setShowSearch}
              />
            )}
          />
        )}
        {!settings && !showSearch && !channel && (
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
                      onChannelSelect={(_ch) => setChannel(_ch)}
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
        {showSearch && (
          <MessageSearch
            channelUrl={channel.url}
            onCloseClick={() => setShowSearch(false)}
            onResultClick={(msg) => {
              setStartingPoint(msg.createdAt)
              setHighlightedMessage(msg.messageId)
              setShowSearch(false)
            }}
          />
        )}
    </div>
  );
}