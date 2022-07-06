import Image from 'next/image'
import homeSel from '../public/homeSel.png'

const imgContainerClass =
  'flex content-center rounded-full w-[48px] border-solid border-2 border-yellow-100'
const imgClass = 'rounded-full'

export default function Home() {
  return (
    <iframe className='w-full h-full' frameBorder="0"
      src="https://www.hkjc.com/english"></iframe>
  )
}
