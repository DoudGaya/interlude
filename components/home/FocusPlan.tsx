'use client'
import { Timer } from "./Timer"
import { useState } from 'react'
import { WorkBreak } from "./Break"

export const FocusPlan = () => {

    const [work, setWork] = useState()
    return (
        <div className=" flex flex-row space-x-4 border px-6 py-3 border-primary/10 rounded-xl">
            <div className=" grid grid-cols-3 gap-x-3 w-full">
                <Timer />
                <WorkBreak />
                <Timer />
            </div>
      </div>
    )
}