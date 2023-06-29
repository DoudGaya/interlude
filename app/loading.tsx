import React from 'react'
import Image from 'next/image'
import Interlude from '@/public/interlude_logo.svg'

const Loading = () => {
  return (
    <div className='h-screen bg-white dark:bg-gray-950 w-full flex items-center justify-center'>
        <Image src={Interlude} className=' w-20 h-20 animate-pulse' alt='' />
    </div>
  )
}

export default Loading
