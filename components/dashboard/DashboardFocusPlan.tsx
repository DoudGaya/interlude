'use client'
import { Timer } from "./Timer"
import { useState } from 'react'
import { WorkBreak } from "./Break"

export const DashboardFocusPlan = ( {plans}: any) => {

    const [work, setWork] = useState()
    return (
        <div className=" flex flex-col h-full overflow-hidden w-full">
            <div className=" flex flex-row space-x-4 border dark:border-gray-600 px-6 py-3 border-primary/10 rounded-xl">
            <div className="grid grid-cols-3 gap-x-3 w-full">
                <Timer />
                <WorkBreak />
            </div>
      </div>
        </div>
    )
}