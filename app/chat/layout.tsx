import Asidebar from '@/components/Asidebar'
import React from 'react'

const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className='flex px-4'>
        <Asidebar/>
        {children}
    </div>
  )
}

export default layout