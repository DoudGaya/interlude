'use client'
//  ICONS IMPORTS 
import { ProductivityTips } from './ProductivityTips'
import { Planner } from './Planner'
import { useState } from 'react'
import {SiOpenai} from 'react-icons/si'
import {RxCalendar} from 'react-icons/rx'
import {GoChecklist} from 'react-icons/go'
import { OpenAi } from './OpenAi'


export const HomeDashbord = () => {

  const [activeState, setActiveState] = useState('work-break')
  
  const updateActiveState = (id: string) => {
    return setActiveState(id)
  }

    return (
        <div className=" w-full bg-gray-100 border shadow-2xl shadow-black/10 dark:shadow-white/10 dark:border-gray-600  dark:bg-slate-950 rounded-xl max-w-[1200px] py-10 mx-auto">
         <div className=" flex items-center flex-col">
          <div className=" flex flex-col items-center">
            <p className=" font-primary text-2xl">How it Works</p>
            <h2 className=" font-logo">Sometime the best way to tell about a product is to show it </h2>
          </div>
          <div className="w-full bg-white dark:bg-black dark:text-gray-200 flex items-center my-10 text-center gap-x-6 grid-cols-3">
           <div className=" w-3/2 grid grid-cols-3 mx-auto">
           <button onClick={() => updateActiveState('work-break')} className={`py-3 flex space-x-3 items-center px-6 ${activeState === 'work-break' && 'bg-black dark:bg-white text-white'} `}>
              <RxCalendar />
              <span>Plan your day</span>
            </button>

            <button onClick={() => updateActiveState('tips')}  className={`py-3 flex space-x-3 items-center px-6 ${activeState === 'tips' && 'bg-black dark:bg-white text-white'} `}>
                <SiOpenai />
                <span>Ask AI</span>
            </button>

            <button onClick={() => updateActiveState('productivity')} className={`py-3 flex space-x-3 items-center px-6 ${ activeState === 'productivity' && 'bg-black dark:bg-white text-white'}`}>
              <GoChecklist />
              <span>Tasks</span>
            </button>
           </div>
          </div>
          <div className=" w-full flex  h-[400px]">
            <div className=" w-1/5 space-y-3 flex flex-col items-center border-r-2 px-6  text-center ">
              <button className="flex items-center justify-center text-gray-500 border border-dashed border-gray-500 rounded bg-2ray-100 w-full px-4 space-x-4 py-3 ">

                <p className=" font-primary">Create Plan</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
              </button>
              <hr />
             <div className=" flex w-full space-y-2 flex-col">
              
                <button className="flex items-center text-gray-500 border border-gray-500 rounded bg-2ray-100 w-full px-4 space-x-4 py-2 ">
                    <p className=" font-primary text-sm flex justify-between items-center truncate w-full">My work plan</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 flex-none h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>

                </button>
                
                <button className="flex items-center text-gray-500 border border-gray-500 rounded bg-2ray-100 w-full px-4 space-x-4 py-2 ">
                  <p className=" font-primary text-sm flex justify-between items-center truncate w-full">My monday work plan</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 flex-none h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
                
                <button className="flex items-center text-gray-500 border border-gray-500 rounded bg-2ray-100 w-full px-4 space-x-4 py-2 ">
                  <p className=" font-primary text-sm flex justify-between items-center truncate w-full">Always on</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 flex-none h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
             </div>
            </div>
            {/*PLAN YOUR DAY COMPONENT */}
            <div className=" w-3/5 py-6 border-r px-6 flex flex-col ">
            {
              activeState === 'work-break' ?
            <Planner /> : activeState === 'tips' ?
            <OpenAi /> : activeState === 'productivity'?
            <ProductivityTips /> : <Planner />
            }
            </div>
            {/* END OF PLAN YOUR DAY COMPONENT */}
            <div className="w-1/5">
                hello
            </div>
          </div>
         </div>
        </div>
    )
}