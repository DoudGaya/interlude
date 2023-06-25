'use client'
//  ICONS IMPORTS 
import {TbMoodCheck } from 'react-icons/tb'
import {TbMoodEmpty} from 'react-icons/tb'
import {TbMoodAnnoyed} from 'react-icons/tb'
import { ProductivityTips } from './ProductivityTips'
import { Expercise } from './Excercise'
import { Planner } from './Planner'
import { useState } from 'react'



export const HomeDashbord = () => {

  const [activeState, setActiveState] = useState('work-break')
  
  const updateActiveState = (event: any) => {
    const {id} = event.target
    setActiveState(id)
  }

    return (
        <div className=" w-full bg-tertiary/40 border dark:border-gray-600  dark:bg-slate-950 rounded-xl max-w-[1200px] py-10 mx-auto">
         <div className=" flex items-center flex-col">
          <div className=" flex flex-col items-center">
            <p className=" font-primary text-2xl">How it Works</p>
            <h2 className=" font-logo">Sometime the best way to tell about a product is to show it </h2>
          </div>
          <div className=" w-2/3 grid mx-auto py-6 text-center gap-x-6 grid-cols-3">
            <button onClick={updateActiveState} id='work-break' className=" border border-secondary text-secondary rounded-lg py-2 ">
              Plan your day
            </button>

            <button onClick={updateActiveState} id='tips' className=" border border-secondary/10 text-secondary rounded-lg py-2 ">
              Get Help
            </button>

            <button onClick={updateActiveState} id='productivity' className=" border border-secondary/10 text-secondary rounded-lg py-2 ">
              Productivity Tips
            </button>
          </div>
          <div className=" w-full flex space-x-3 h-[400px] my-10">
            <div className=" w-1/5  flex flex-col items-center border-r-2  text-center ">
              <div className="flex items-center text-primary border-l-4 bg-indigo-100 w-full px-4 space-x-4 py-3 border-primary ">
                <TbMoodCheck className="stroke-2" size={30} />
                <p className=" font-primary">Healthy</p>
              </div>

              <div className="flex  text-primary border-l-4 border-transparent hover:bg-indigo-100 hover:cursor-pointer w-full items-center space-x-4 px-4 py-3 ">

                <TbMoodEmpty size={30} className=" stroke-2" />
                <p className=" font-primary">Neutral</p>
              </div>

              <div className="flex  text-primary  hover:bg-indigo-100 hover:cursor-pointer w-full items-center space-x-4 px-4 py-3 ">
                <TbMoodAnnoyed size={30} className=" stroke-2" />
                <p className=" font-primary">Stressed</p>
              </div>
            </div>
            {/*PLAN YOUR DAY COMPONENT */}

            {
              activeState === 'work-break' ?
            <Planner /> : activeState === 'tips' ?
            <Expercise /> : activeState === 'productivity'?
            <ProductivityTips /> : <Planner />
            }
            {/* END OF PLAN YOUR DAY COMPONENT */}
            <div className="w-1/5">
                hello
            </div>
          </div>
         </div>
        </div>
    )
}