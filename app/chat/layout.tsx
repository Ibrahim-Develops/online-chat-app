import Asidebar from '@/components/Asidebar'
import React from 'react'

const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className='flex p-4 h-screen'>
        <Asidebar/>
        {children}
    </div>
  )
}

export default layout