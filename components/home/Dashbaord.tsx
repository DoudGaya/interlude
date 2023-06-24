//  ICONS IMPORTS 
import {TbMoodCheck } from 'react-icons/tb'
import {TbMoodEmpty} from 'react-icons/tb'
import {TbMoodAnnoyed} from 'react-icons/tb'

// COMPONENTS IMPORTS
import { Timer } from './Timer'



export const HomeDashbord = () => {
    return (
        <div className=" w-full bg-tertiary/40 dark:bg-slate-950 rounded-xl max-w-[1200px] py-10 mx-auto">
         <div className=" flex items-center flex-col">
          <div className=" flex flex-col items-center">
            <p className=" font-primary text-2xl">How it Works</p>
            <h2 className=" font-logo">Sometime the best way to tell about a product is to show it </h2>
          </div>
          <div className=" w-2/3 grid mx-auto py-6 text-center gap-x-6 grid-cols-3">
            <button className=" border border-secondary text-secondary rounded-lg py-2 ">
              Plan your day
            </button>

            <button className=" border border-secondary/10 text-secondary rounded-lg py-2 ">
              Get Help
            </button>

            <button className=" border border-secondary/10 text-secondary rounded-lg py-2 ">
              Productivity Tips
            </button>
            
          </div>
          <div className=" w-full flex space-x-3 h-[500px] my-10">
            <div className=" w-1/5 space-y-3 flex flex-col px-6 items-center border-r-2 border-primary/30 text-center ">
              <div className="flex bg-primary items-center text-white w-full px-4 space-x-4 py-3 rounded-lg ">
                <TbMoodCheck className="stroke-2" size={30} />
                <p className=" font-primary">Healthy</p>
              </div>

              <div className="flex  text-primary hover:bg-indigo-100 hover:cursor-pointer w-full items-center space-x-4 px-4 py-3 rounded-lg ">

                <TbMoodEmpty size={30} className=" stroke-2" />
                <p className=" font-primary">Neutral</p>
              </div>

              <div className="flex  text-primary  hover:bg-indigo-100 hover:cursor-pointer w-full items-center space-x-4 px-4 py-3 rounded-lg ">
                <TbMoodAnnoyed size={30} className=" stroke-2" />
                <p className=" font-primary">Stressed</p>
              </div>
            </div>
            <div className=" w-3/5 flex flex-col ">
            <div className=" flex ">
            <button className='flex bg-primary text-white space-x-2 mb-3 justify-center rounded-lg px-3 py-1 items-center'>
                <span>Play</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
            </button>
            </div>
              <div className=" flex flex-row space-x-4 border px-6 py-3 border-primary/10 rounded-xl">
                <div className="flex flex-col">
                <Timer />
                </div>
              </div>
            </div>
            <div className=" w-1/5">
              hello
            </div>
          </div>
         </div>
        </div>
    )
}