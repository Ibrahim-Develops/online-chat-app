"use client"

import { IoCallOutline } from "react-icons/io5"
import { MdGroupAdd, MdGroups2 } from "react-icons/md";
import { GrChat } from "react-icons/gr";
import Image from 'next/image'
import { usePathname } from 'next/navigation';  
import Logo from '../assets/Lgo.png'
import Link from "next/link";

const Asidebar = () => {
    const pathname = usePathname();  

    return (
        <div>
            <div className='flex flex-col justify-between py-5 px-3 bg-[#1a1a1a] rounded-2xl h-full'>
                <div className='flex flex-col gap-12'>
                    <div className='bg-[#f4feb1] w-14 h-14 flex justify-center items-center rounded-full'>
                        <Image src={Logo} alt='Logo' className='w-8' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Link href="/chat/home" className={`bg-[#303030e1] w-14 h-14 text-white flex text-xl justify-center items-center rounded-full cursor-pointer`} >
                            <GrChat className={`${pathname === "/chat/home" ? "text-[#ddff00]" : ""}`}/>
                        </Link>
                        <Link href="" className='bg-[#303030e1] w-14 h-14 text-white flex text-2xl justify-center items-center rounded-full cursor-pointer'>
                            <IoCallOutline />
                        </Link>
                        <Link href="" className='bg-[#303030e1] w-14 h-14 text-white flex text-2xl justify-center items-center rounded-full cursor-pointer'>
                            <MdGroups2 />
                        </Link>
                    </div>
                </div>
                <div className='bg-[#f4feb1] w-14 h-14 flex text-2xl justify-center items-center rounded-full cursor-pointer'>
                    <MdGroupAdd />
                </div>
            </div>
        </div>
    )
}

export default Asidebar;
