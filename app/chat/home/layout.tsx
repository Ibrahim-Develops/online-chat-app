import ChatBar from '@/components/ChatBar';
import React from 'react'

const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className='flex'>
        <ChatBar/>
        {children}
    </div>
  )
}

export default layout