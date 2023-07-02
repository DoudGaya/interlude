import React from 'react'
import emelyEllis from '@/public/emily-ellis.jpeg' 
import emelyVernon from '@/public/emily-vernon.jpeg' 
import lucyClifton from '@/public/lucy-clifton.jpeg' 
import testmo from '@/public/Testimonial_1000x1000.png'
import { StaticImageData } from 'next/image'
import Image from 'next/image'


interface TestMo {
    id: number;
    name: string;
    imgUrl: StaticImageData;
    message: string
}

const testimonials: TestMo[] = [
    {
        id: 1,
        name: 'Emily Ellis',
        imgUrl: emelyEllis ,
        message: `I'll be honest, I've often felt "too busy" to take a break. But OMG they have kept me sane! They have been so great at just giving me a bit of "me time" during the day and I feel I've been a better worker because of them.`
    },
    {
        id: 2,
        name: 'Emily Vernon',
        imgUrl: emelyVernon ,
        message: `I absolutely loved this break. Rather than spending 10 minutes scrolling on my phone, following this quick stretch routine made me feel relaxed and refreshed.`
    },

    {
        id: 3,
        name: 'Lucy Clifton',
        imgUrl: lucyClifton ,
        message: `I was quite reluctant to take a break because I was feeling quite stressed having a million things to do but I'm so glad I stopped for 10 mins to do this! I feel so much calmer after it!`
    },
    {
        id: 4,
        name: 'Matthew Stafford',
        imgUrl: testmo ,
        message: `I just did the stretch one with Charlie. Holy moly brilliant! My chiropractor has been on at me to do this sort of thing for yonks – you're the one that's made it happen though.`
    }
]

export const Testimonials = () => {
  return (
    <>
    <p className=' font-semibold text-xl font-logo'>What others are saying about us</p>
    <div className=' grid grid-cols-2  gap-x-6 gap-y-4'>
       {testimonials.map((single: TestMo ) => {
            return (
                <div key={single.id} className="border space-y-6 px-6 py-4 rounded-xl broder-gray-600 dark:border-gray-600 flex flex-col">
                    <div className="flex flex-row items-center space-x-3">
                        <Image src={single.imgUrl} className=' rounded-full  h-16 w-16' alt={single.name} />
                    <p className=' font-primary '>{single.name}</p>
                    </div>
                    <div className=" font-logo">
                        {single.message}
                    </div>
                </div>
            )
       })}
    </div>
    </>
  )
}
