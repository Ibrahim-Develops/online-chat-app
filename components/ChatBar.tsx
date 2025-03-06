import Image from 'next/image'
import Avatar from '../assets/avatar.jpeg'

const ChatBar = () => {
  return (
    <div className='text-white mx-5 flex flex-col gap-3'>

        <div className='flex gap-4 bg-[#1a1a1a] w-[300px] rounded-2xl px-5 py-2 items-center'>
            <Image src={Avatar} alt='Avatar' className='rounded-full w-16 h-16'/>
            <div>
                <h1 className='font-normal'>Ibrahim</h1>
                <p className='font-thin'>Lorem ipsum dolor</p>
            </div>
        </div>

        <div className='flex gap-4 bg-[#303030] w-[300px] rounded-2xl px-5 py-2 items-center'>
            <Image src={Avatar} alt='Avatar' className='rounded-full w-16 h-16'/>
            <div>
                <h1 className='font-normal'>Ibrahim</h1>
                <p className='font-thin'>Lorem ipsum dolor</p>
            </div>
        </div>

        <div className='flex gap-4 bg-[#1a1a1a] w-[300px] rounded-2xl px-5 py-2 items-center'>
            <Image src={Avatar} alt='Avatar' className='rounded-full w-16 h-16'/>
            <div>
                <h1 className='font-normal'>Ibrahim</h1>
                <p className='font-thin'>Lorem ipsum dolor</p>
            </div>
        </div>

    </div>
  )
}

export default ChatBar