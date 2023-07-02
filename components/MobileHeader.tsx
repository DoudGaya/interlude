import React from 'react'
import DarkButton from './DarkMode'

export const MobileHeader = () => {
  return (
    <div className=' text-white dark:bg-black w-full flex justify-between px-10 py-4'>
        <p className='text-2xl text-primary font-logo font-bold '>Interlude</p>
        <DarkButton />
    </div>
  )
}
