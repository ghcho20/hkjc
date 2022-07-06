import { sendBirdSelectors, useSendbirdStateContext } from "@sendbird/uikit-react"

export default function Account() {
    const context = useSendbirdStateContext()
    const sdk = sendBirdSelectors.getSdk(context)
    const uid = sdk.getCurrentUserId()
    return (
        <div className='flex w-full h-full justify-center items-center'>
            <div>Login: {uid}</div>
        </div>
    )
}