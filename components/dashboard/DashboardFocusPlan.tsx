'use client'
import { Timer } from "./Timer"
import { useState, useContext, useEffect } from 'react'
import { WorkBreak } from "./Break"
import { TimerContext } from "@/utils/context/TimerContext"

export const DashboardFocusPlan = ( {plans}: any) => {

    // @ts-ignore
    const { activePlan, updateActivePlan, restTimeLeft, workTimeLeft  } = useContext(TimerContext)
    // const { timeSpan } = activePlan || null


    return (
        <div className=" flex flex-col h-full overflow-hidden w-full">
            <div className=" flex flex-row space-x-4 border dark:border-gray-600 p-3 border-primary/10 rounded-xl">
            <div className="grid grid-cols-3 gap-4 w-full">
               {
                activePlan?.timeSpan.map((item: any) => <Timer timeSpan={item} key={item.id} /> )
               }
            </div>
      </div>
        </div>
    )
}