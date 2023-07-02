import React from 'react'
import Image from 'next/image'
import interlude_break1 from '@/public/interlude_break1.jpg'
import interlude_break2 from '@/public/interlude_break2.jpg'
import Link from 'next/link'

export const About = () => {
  return (

      <div className=" grid grid-cols-1 px-10 lg:px-0 lg:grid-cols-2 gap-6 w-full py-20">
      <div className=" flex flex-col space-y-4 my-auto h-full justify-center">
        <p className=' lg:text-3xl text-2xl font-semibold font-logo '>Productivity Begins with Wellbeing</p>
        <div className=" text-justify font-logo">
        Regular breaks are really good for us.
        They support our mental and physical wellbeing, and empower us to work better and more creatively. When we're working better, we're happier, and when we're happier, we work better.
        You already know all this, but too often work breaks aren't long enough, good enough or even taken at all. <span className=' text-primary font-semibold'>Interlude</span> is here to change this by helping workers and businesses supercharge their productivity through the power of high-quality breaks.
        </div>
       <div className=" flex w-full ">
        <Link href={'https://interlude.digital'} target='_blank'  className=" text-white px-6 py-2 bg-primary">
          Learn More 
        </Link>
       </div>
      </div>
      <div className="">
        <Image src={interlude_break1} className=' h-[300px] object-cover object-center' alt='Interlude Break' />
      </div>
      </div>
  )
}
