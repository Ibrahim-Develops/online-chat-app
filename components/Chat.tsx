"use client"

import Avatar from '../assets/avatar.jpeg'
import { IoPaperPlaneOutline } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Chat = () => {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className=''>

            <div className='bg-[#1a1a1a] grow h-screen text-white px-5 rounded-2xl flex flex-col justify-between '>
                <div className="pt-5 flex gap-5">
                    <Image src={Avatar} alt='Avatar' className='rounded-full w-16 h-16' />
                    <div className='flex flex-col gap-2 mx-4'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold'>Jhon Wick</h1>
                            <div>{currentTime}</div>
                        </div>
                        <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, optio quam autem dolorem quod accusantium odit eius porro. Natus a quam corporis velit repellat iste ullam quia tenetur atque ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae soluta error culpa, quo praesentium obcaecati ducimus deleniti exercitationem! Doloribus libero vitae ex sit aut ad omnis optio asperiores quidem voluptatibus! Exercitationem, soluta sit.</p>
                    </div>
                </div>

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