"use client"

import { SubmitHandler, useForm } from 'react-hook-form'
import { login } from '@/app/serveractions/login.action'
import Circle from '../assets/circle.png'
import Arrow from '../assets/arrow.png'
import Lines from '../assets/lines.png'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface Inputs {
  email: string,
  password: string
};

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    
    const res = await login(data)
    reset()
    if (res.error) {
      console.log(res.error);
    } else {
      redirect('/chat/home')
    }

  }

  return (
    <div className='text-white flex flex-col justify-center items-center w-full h-screen'>
      <Image src={Circle} alt='Circle' className='absolute w-1/8 left-0' />
      <Image src={Lines} alt='Lines' className='absolute w-1/3 right-0 top-0' />
      <Image src={Arrow} alt='Arrow' className='absolute w-1/8 right-0 bottom-0' />
      <Link href="/signup" className='bg-white text-black font-bold py-3 text-center text-md hover:bg-white cursor-pointer absolute top-10 left-[5%] w-1/4 sm:w-1/8 lg:w-1/8 rounded-xl'>Signup</Link>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='font-bold font-mono text-5xl mb-5 text-left'>Login</h1>
        <form className='flex flex-col gap-8 relative 2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w1/2 w-1/2' onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} type="text" placeholder='Email' className='border-b-2 border-white outline-none py-2 text-lg' />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          <input {...register("password")} type="text" placeholder='Password' className='border-b-2 border-white outline-none py-2 text-lg' />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          <Button className='bg-white text-black font-bold py-6 text-md hover:bg-white cursor-pointer rounded-none'>Login</Button>
        </form>
      </div>
    </div>
  )
}

export default Login