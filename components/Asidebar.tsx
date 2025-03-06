import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { IoCallOutline } from "react-icons/io5"
import { MdGroupAdd } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { GrChat } from "react-icons/gr";
import Logo from '../assets/Lgo.png'
import Image from 'next/image'

const Asidebar = () => {
    return (
        <div className=''>
            <div className='flex flex-col justify-between py-5 px-3 bg-[#1a1a1a] rounded-2xl h-screen'>
                <div className='flex flex-col gap-12'>
                    <div className='bg-[#f4feb1] w-14 h-14 flex justify-center items-center rounded-full'>
                        <Image src={Logo} alt='Logo' className='w-8' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='bg-[#303030e1] w-13 text-white h-13 flex text-xl justify-center items-center rounded-full cursor-pointer'>
                            <GrChat />
                        </div>
                        <div className='bg-[#303030e1] w-13 text-white h-13 flex text-2xl justify-center items-center rounded-full cursor-pointer'>
                            <IoCallOutline />
                        </div>
                        <div className='bg-[#303030e1] w-13 text-white h-13 flex text-2xl justify-center items-center rounded-full cursor-pointer'>
                            <MdGroups2 />
                        </div>
                    </div>
                </div>
                <div className='bg-[#f4feb1] w-14 h-14 flex text-2xl justify-center items-center rounded-full cursor-pointer'>
                    <MdGroupAdd />
                </div>
            </div>
        </div>
    )
}

export default Asidebar