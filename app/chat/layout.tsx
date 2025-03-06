import Asidebar from '@/components/Asidebar'
import React from 'react'

const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className='flex 2xl:p-4 p-2 h-screen'>
        <Asidebar/>
        {children}
    </div>
  )
}

export default layout