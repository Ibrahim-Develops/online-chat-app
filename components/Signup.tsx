"use client"

import Image from 'next/image'
import Arrow from '../assets/arrow.png'
import Circle from '../assets/circle.png'
import Lines from '../assets/lines.png'
import { Button } from './ui/button'
import axios from 'axios'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

interface Inputs {
  username: string,
  email: string,
  password: string,
};

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();


  const onSubmit = async (data: Inputs) => {

    try{

      const res = axios.post(`http://localhost:4000/auth/signup`, data, {withCredentials: true})
      console.log(await res)
    } catch (error: any) {
      console.log("Signup Failed:", error);
      alert(error.message)
    }
  }

  return (
    <div className='text-white flex flex-col justify-center items-center w-full h-screen'>
      <Image src={Circle} alt='Circle' className='absolute w-1/8 left-0' />
      <Image src={Lines} alt='Lines' className='absolute w-1/3 right-0 top-0' />
      <Image src={Arrow} alt='Arrow' className='absolute w-1/8 right-0 bottom-0' />
      <Link href="/login" className='bg-white text-black font-bold py-3 text-center text-md hover:bg-white cursor-pointer absolute top-10 left-[5%] w-1/4 sm:w-1/8 lg:w-1/8 rounded-xl'>Login</Link>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='font-bold font-mono text-5xl mb-5 text-left'>Signup</h1>
        <form className='flex flex-col gap-8 relative 2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w1/2 w-1/2' onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", {required: "Please Enter the Username" })} type="text" placeholder='Username' className='border-b-2 border-white outline-none py-2 text-lg' />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          <input {...register("email", {required: "Please Enter the Email" })} type="text" placeholder='Email' className='border-b-2 border-white outline-none py-2 text-lg' />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          <input {...register("password", {required: "Please Enter the password" })} type="text" placeholder='Password' className='border-b-2 border-white outline-none py-2 text-lg' />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          <Button className='bg-white text-black font-bold py-6 text-md hover:bg-white cursor-pointer rounded-none'>Signup</Button>
        </form>
      </div>
    </div>
  )
}

export default Signup