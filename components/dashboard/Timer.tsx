import { useState, useContext, useEffect, useRef } from "react"
import { TimerContext } from "@/utils/context/TimerContext"

export const Timer = ({timeSpan}: {timeSpan: any}) => {

// @ts-ignore
    const {restTimeLeft, workTimeLeft, isRunning, activePlan, currentTimerIndex } = useContext(TimerContext) 

// @ts-ignore
    const componentID = activePlan.timeSpan[currentTimerIndex]
    
    const { id } = componentID


    return (
        <div className=" w-full grid grid-cols-2 gap-x-2  px-4 border border-gray-300 dark:border-gray-600 rounded-xl py-3">
        <div className={`rounded-full w-full ${ (timeSpan.id === id && isRunning) ? 'bg-primary text-white' : ''  } py-5 h-full items-center  justify-center flex flex-col border border-gray-300 dark:border-gray-600`}>

            <div className="font-bold text-2xl  font-primary text-gray-950 dark:text-gray-400">{(timeSpan.id === id) ? workTimeLeft : timeSpan.workTime}</div>
            <span className='font-semi text-gray-700 dark:text-gray-500 text-sm'>minutes</span> 
           <div className="flex space-y-3 justify-between items-baseline ">
            <div className="flex flex-col dark:text-gray-400 justify-between items-baseline">
                <span className="rounded-lg px-2 text-secondary/90 text-xs ">work</span>
            </div>
           </div>
         </div>
         <div className={`rounded-full w-full ${ (timeSpan.id === id && isRunning) ? 'bg-white text-black' : ''  } py-5 h-full items-center  justify-center flex flex-col border border-gray-300 dark:border-gray-600`}>
            <div className=" flex items-center justify-center flex-col">
               <span className="font-bold text-2xl font-primary text-gray-950 dark:text-gray-400">{(timeSpan.id === id) ? restTimeLeft : timeSpan.restTime}</span>
                <span className='  font-semi text-gray-700 dark:text-gray-500 text-sm '>minutes</span> 
            <small className=" text-xs text-green-600/80">break</small>
            </div>
         </div>
        </div>
    )
}