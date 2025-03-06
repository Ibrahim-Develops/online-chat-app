import Avatar from '../assets/avatar.jpeg';
import Image from 'next/image';

const ChatBar = () => {
  return (
    <div className='text-white mx-5 flex flex-col gap-3 overflow-hidden overflow-y-scroll scrollbar-hide w-full sm:w-full lg:w-full 2xl:w-1/2 grow'>

      <div className='flex gap-4 bg-[#1a1a1a] rounded-2xl px-5 py-2 items-center cursor-pointer lg:justify-start md:justify-center w-full'>
        <Image src={Avatar} alt='Avatar' className='rounded-full w-12 h-12 md:w-14 md:h-14' />
        <div>
          <h1 className='font-normal text-sm md:text-base sm:hidden lg:block'>Ibrahim</h1>
          <p className='font-thin text-xs md:text-xs sm:hidden lg:block'>Lorem ipsum dolor</p>
        </div>
      </div>

      <div className='flex gap-4 bg-[#303030] rounded-2xl px-5 py-2 items-center cursor-pointer lg:justify-start md:justify-center'>
        <Image src={Avatar} alt='Avatar' className='rounded-full w-12 h-12 md:w-14 md:h-14' />
        <div className=''>
          <h1 className='font-normal text-sm md:text-base sm:hidden lg:block'>Ibrahim</h1>
          <p className='font-thin text-xs md:text-xs sm:hidden lg:block'>Lorem ipsum dolor</p>
        </div>
      </div>

    </div>
  );
};

export default ChatBar;
