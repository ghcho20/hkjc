import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext"
import { useState, useEffect } from "react"

import Image from 'next/image'
import homeSel from '../public/homeSel.png'

export default function OpenChannelList({renderChannelPreview}) {
    const { sdk } = useSendbirdStateContext().stores.sdkStore
    const [channels, setChannels] = useState([])
    useEffect(() => {
        const ocListQuery = sdk.OpenChannel.createOpenChannelListQuery();
        ocListQuery.next((chs, err) => {
            if (err) {
                console.log('open channel list query error: ', err)
            } else {
                setChannels(chs)
            }
        })
    }, [sdk])

    return <div className="flex flex-col w-full">
        <div className="flex justify-center rounded-md w-[95%] p-3 m-3 border-2 border-gray">
            <div className="flex w-[45%] justify-around">
                <Image className="rounded-full"
                    src={homeSel} width={35} height={35} />
                <div className="font-bold">Racings Today</div>
            </div>
        </div>
        <div className="w-full h-full">
            {channels.length > 0 && (
                <>
                {
                    channels.map((c) => renderChannelPreview({channel: c})
                    )
                }
                </>
            )}
        </div>
    </div>
}