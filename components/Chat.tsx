"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { IoPaperPlaneOutline } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import { useEffect, useState } from 'react';
import Avatar from '../assets/avatar.jpeg'
import Image from 'next/image';

const Chat = () => {

    return (
        <div className='h-full'>

            <div className='bg-[#1a1a1a] grow text-white px-5 rounded-2xl h-full flex flex-col justify-between '>
                <AlertDialog>
                    <div className="pt-5 flex gap-5 flex-wrap xl:flex-nowrap">
                        <AlertDialogTrigger>
                            <Image src={Avatar} alt='Avatar' className='rounded-full cursor-pointer w-20 xl:w-[300px] 2xl:w-[200px]' />
                        </AlertDialogTrigger>
                        <div className='flex flex-col gap-2 mx-4'>
                            <div className='flex justify-between'>
                                <h1 className='font-bold xl:text-xl'>Jhon Wick</h1>
                                <div className="text-sm">12:00 PM</div>
                            </div>
                            <p className='font-thin text-sm lg:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, optio quam autem dolorem quod accusantium odit eius porro. Natus a quam corporis velit repellat iste ullam quia tenetur atque ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae soluta error culpa, quo praesentium obcaecati ducimus deleniti exercitationem! Doloribus libero vitae ex sit aut ad omnis optio asperiores quidem voluptatibus! Exercitationem, soluta sit.</p>
                        </div>
                    </div>

                    <AlertDialogContent className="h-[48rem] bg-[#070707] text-white border-[1px] border-gray-700">
                        <AlertDialogHeader className="flex">
                            <AlertDialogCancel className="border-none text-5xl bg-#070707 hover:bg-#070707 hover:text-white w-1 cursor-pointer h-1 items-start justify-items-start">
                                <RiCloseLargeFill />
                            </AlertDialogCancel>
                            <div className="flex flex-col justify-center items-center gap-10 ">
                                <AlertDialogTitle>
                                    <Image src={Avatar} alt='Avatar' className='rounded-full w-36 h-36' />
                                </AlertDialogTitle>
                                <AlertDialogDescription className="text-gray-300 flex flex-col gap-4 text-left">
                                    <h1 className="font-bold 2xl:text-lg">Description</h1>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </AlertDialogDescription>
                            </div>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>


                <div className="flex justify-between items-center gap-5 w-full bg-[#303030] py-4 px-5 rounded-2xl bottom-5 mb-5">
                    <div className="flex justify-center items-center gap-5 w-full">
                        <GrAttachment className="cursor-pointer text-xl" />
                        <input className="w-full outline-none text-lg font-thin" type="text" placeholder="Write a message..." />
                    </div>
                    <IoPaperPlaneOutline className="cursor-pointer text-2xl" />
                </div>
            </div>



        </div>
    )
}

export default Chat