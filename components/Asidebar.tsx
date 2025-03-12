"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { redirect, usePathname, useRouter } from 'next/navigation';
import { MdGroupAdd, MdGroups2 } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5"
import { Input } from "@/components/ui/input"
import { CiLogout } from "react-icons/ci";
import { GrChat } from "react-icons/gr"
import Logo from '../assets/Lgo.png'
import Image from 'next/image'
import Link from "next/link";

const Asidebar = () => {
    const pathname = usePathname();

    return (
        <div>
            <div className='flex flex-col justify-between 2xl:py-5 2xl:px-3 py-4 px-2 bg-[#1a1a1a] rounded-2xl h-full'>
                <div className='flex flex-col gap-12'>
                    <div className='bg-[#f4feb1] 2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 h-10 w-10 flex justify-center items-center rounded-full'>
                        <Image src={Logo} alt='Logo' className='w-8' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Link href="/chat/home" className={`bg-[#303030e1] 2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 h-10 w-10 text-white flex text-xl justify-center items-center rounded-full cursor-pointer`} >
                            <GrChat className={`${pathname === "/chat/home" ? "text-[#ddff00]" : ""}`} />
                        </Link>
                        <Link href="" className='bg-[#303030e1] 2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 h-10 w-10 text-white flex text-2xl justify-center items-center rounded-full cursor-pointer'>
                            <IoCallOutline />
                        </Link>
                        <Link href="" className='bg-[#303030e1] 2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 h-10 w-10 text-white flex text-2xl justify-center items-center rounded-full cursor-pointer'>
                            <MdGroups2 />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <div className='bg-[#f4feb1] 2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 h-10 w-10 flex text-2xl justify-center items-center rounded-full cursor-pointer'>
                                <MdGroupAdd />
                            </div>
                        </AlertDialogTrigger>

                        <AlertDialogContent className="bg-[#070707] text-white border-[1px] border-gray-700">
                            Add a User
                            <AlertDialogHeader>
                                <AlertDialogTitle className="font-bold">
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    <Input placeholder="Please Enter Email To Add" className="border-[1px] border-gray-700" />
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction className="cursor-pointer">Done</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                    <div onClick={()=> redirect('/login')} className='bg-[#f4feb1] 2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 h-10 w-10 flex text-2xl justify-center items-center rounded-full cursor-pointer'>
                        <CiLogout />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Asidebar;
