import logo from '../public/interlude_logo.svg'
import Image from 'next/image'
import { VscSmiley } from 'react-icons/vsc'
import { MdOutlineTipsAndUpdates } from 'react-icons/md'
import { RiMentalHealthLine } from 'react-icons/ri'

export const Banner = () => {
    return (
        <div className="flex items-center bg-white dark:bg-black justify-center h-[95vh] space-y-3 flex-col w-full">
        <Image src={logo} alt='Interlude Logo ' className='hover:cursor-pointer hover:stroke-secondary'></Image>
        <h1 className=" text-7xl dark:text-indigo-200 text-indigo-950 font-logo font-semibold "
        >Welcome to <span className=" text-primary selection:bg-secondary ">Interlude</span><span className=" selection:bg-primary text-secondary">.</span>
        </h1>
        <h3 className=" font-logo text-3xl text-indigo-50 text-purple-950 ">Your productivity friend.</h3>
        <div className=" grid grid-cols-3 gap-x-4 py-6">
          <div className=" hover:bg-tertiary py-6 px-10 flex space-x-3 justify-center  items-center rounded-lg text-purple-950 border-2 border-purple-300 font-primary"
          >
            <span>Avoid Burnout</span> 
            <VscSmiley size={32} />
          </div>
          <div className=" hover:bg-tertiary py-6 px-10 flex space-x-3 items-center justify-center rounded-lg text-purple-950 border-2 border-purple-300 font-primary"
          >
            <span>Productivity Tips</span>
          <MdOutlineTipsAndUpdates size={32} />
          </div>
          <div className=" hover:bg-tertiary py-6 px-10 flex space-x-3 items-center justify-center rounded-lg text-purple-950 border-2 border-purple-300 font-primary"
          > 
          <span>Stay Healthy</span>
          <RiMentalHealthLine size={32} />
          </div>
        </div>
      </div>
    )
}