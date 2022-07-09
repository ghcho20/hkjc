import { OpenChannelProvider } from '@sendbird/uikit-react/OpenChannel/context'
import OpenChannelUI from '@sendbird/uikit-react/OpenChannel/components/OpenChannelUI'
import OpenChannelSettings from '@sendbird/uikit-react/OpenChannelSettings'
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext"

import { useState } from "react";

import ChatHeader from "./ChatHeader";
import ChannelPreview from "./ChannelPreview";
import OpenChannelList from "./OpenChannelList"

export default function Open() {
  const [channel, setChannel] = useState(null)
  const [settings, setSettings] = useState(false)
  const { sdk } = useSendbirdStateContext().stores.sdkStore

  /* a workaround for 3.0.0-beta.6 bug
   * that references an invalid field of useRef.current.value instead of useRef.current
   */
  const buildParams = (msgtxt) => {
    const inputField = document.getElementById('sendbird-message-input-text-field')
    const params = new sdk.UserMessageParams()
    if (inputField && inputField.innerText) {
        params.message = inputField.innerText
    }
    return params
  }

  return (
    <div className="App w-full h-full">
        {!settings && channel && (
          <OpenChannelProvider
            channelUrl={channel.url}
            useMessageGrouping={true}
            disableUserProfile={false}
            onBeforeSendUserMessage={buildParams}
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