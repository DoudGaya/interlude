'use client'
//  ICONS IMPORTS 
import DashboardTodo from './DashboardTodo'
import { DashboardPlanner } from './DashboardPlanner';
import DarkButton from '../DarkMode';
// import { DashboardAI } from './DashboardAI';
import DashboardAI from './DashboardAI';
import { useState, useEffect, useContext } from 'react';
import {SiOpenai} from 'react-icons/si';
import {RxCalendar} from 'react-icons/rx';
import {GoChecklist} from 'react-icons/go';
import Link from 'next/link';
import { auth } from '@/utils/firebase/config';
import { TimerContext } from '@/utils/context/TimerContext';
import { CreatePlan } from './CreatePlan';
import ClickAwayListener from 'react-click-away-listener';
import Calendar from './Calender';
import DigitalClock from './DigitalClock';




export const UserDashboard = ({ user }: { user: { name: string, email: string, password: string}}) => {


       // @ts-ignore
  const { plans, activePlan, updateActivePlan, deletePlan } = useContext(TimerContext)   
  const [activeState, setActiveState] = useState<any>('work-break')
  const [creatPlanModal, setCreatePlanModal] = useState(false)

  
  const updateActiveState = (id: string) => {
    setActiveState(id)
  }

  const updatePlan = (id: string) => {
      setActiveState('work-break')
      updateActivePlan(id)
  }


  useEffect(() => {
    updateActivePlan(activePlan?.id || plans[0]?.id || '')
}, [plans])

  

  const signOutUser = () => {
    return auth.signOut()
  }

  
    return (
        <>
         <div className="h-full  flex lg:hidden min-h-screen px-10 w-full items-center justify-center">
         <div className=" flex flex-col space-y-10">
         <p className=' text-2xl font-logo text-center'> Please visit on a desktop screen to access this section. </p>
          <Link href={'/'} className=" text-white text-center text-xl bg-primary px-10 py-3">Go Home</Link>
         </div>
        </div>
        
        <div className=" w-full   hidden lg:block h-screen bg-gray-10 shadow-black/10 dark:shadow-white/10 dark:border-gray-600  dark:bg-slate-950 rounded-xl mx-auto">
         <div className=" flex items-center flex-col">

          <div className=" w-full flex h-full">
            <div className=" w-1/6 bg-white dark:bg-black h-screen py-10 space-y-3 flex flex-col items-center border-r dark:border-gray-800/80 px-6  text-center ">
              <button onClick={() => setCreatePlanModal(true)} className="flex items-center justify-center text-gray-500 border border-dashed border-gray-500 rounded bg-2ray-100 w-full px-4 space-x-4 py-3 ">
                <p className=" font-primary">Create Plan</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
              </button>
              <hr />
             
              <div className=" flex w-full space-y-2 flex-col">
              {
                plans.map((single: any) => {
                  return (
                    <button onClick={() => updatePlan(single.id)} key={single.id} className={`flex items-center text-gray-500 border ${activePlan?.id === single.id ? 'border-primary' : 'border-gray-500'} rounded bg-2ray-100 w-full px-4 space-x-4 py-2`}>
                        <p className=" font-primary text-sm flex justify-between items-center truncate w-full">{single.name}</p>
                       <button onClick={() => deletePlan(single.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 flex-none h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                       </button>
                    </button>
                  )
                })
              }
             </div>
            </div>
            {/*PLAN YOUR DAY COMPONENT */}
            <div className=" w-5/6 py-6 border-r-2 dark:border-gray-600 px-6 flex flex-col ">
                    <div className="w-full border dark:border-gray-800 bg-white dark:bg-black shadow-sm shadow-primary/10 px-10 rounded-lg flex">
              <div className=" w-full  flex mx-auto justify-between py-2">
                  <div className="">
                  <Link href="/" className=" font-logo font-bold text-2xl text-primary">
                      Interlude<span className=" text-secondary">.</span>
                  </Link>
                  </div> 
                  <div className=" flex space-x-4">
                    <button onClick={signOutUser} className=' p-2 border border-gray-400 bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white  rounded-lg'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                  </button>
                    <DarkButton />
                  </div>
              </div>
            </div>

            <div className=" flex justify-between items-center">
            <div className="   dark:text-gray-200 flex items-center my-4 text-center gap-x-6 grid-cols-3">
           <div className=" w-3/2 grid grid-cols-3 gap-x-4 mx-auto">
           <button onClick={() => updateActiveState('work-break')} className={`py-3 border rounded-xl border-gray-700 text-gray-400 flex space-x-3 items-center px-6 ${activeState === 'work-break' && 'bg-black dark:bg-gray-200 dark:text-gray-900 text-white'} `}>
              <RxCalendar />
              <span>Plan your day</span>
            </button>

            <button onClick={() => updateActiveState('tips')}  className={`py-3 border rounded-xl border-gray-700 text-gray-400 flex space-x-3 items-center px-6 ${activeState === 'tips' && 'bg-black dark:bg-gray-200 dark:text-gray-900 text-white'} `}>
                <SiOpenai />
                <span>Ask AI</span>
            </button>

            <button onClick={() => updateActiveState('productivity')} className={`py-3 border rounded-xl border-gray-700 text-gray-400 flex space-x-3 items-center px-6 ${ activeState === 'productivity' && 'bg-black dark:bg-gray-200 dark:text-gray-900 text-white'}`}>
              <GoChecklist />
              <span>Tasks</span>
            </button>
           </div>
            </div>

            <div className="">
            <div   className={`py-3 rounded-xl flex space-x-3 items-center px-6 text-gray-900 dark:text-gray-200 `}>
               <DigitalClock />
            </div>

            </div>
            </div>

            <div className=" flex h-full space-x-6 flex-row w-full">
              <div className=" flex flex-col w-4/6">
                { creatPlanModal &&
                  <div className=" relative">
                    <div className=" absolute w-full -top-20 flex ">
                        <CreatePlan closeModal={setCreatePlanModal} />
                    </div>
                  </div>
                }
                {
                  activeState === 'work-break' ?
                  <DashboardPlanner /> : activeState === 'tips' ?
                  <DashboardAI /> : activeState === 'productivity'?
                  <DashboardTodo /> : <DashboardPlanner />
                }

              </div>


                <div className=" w-2/6 h-full">
               
                 <div className=" flex flex-col rounded-xl h-full py-4 w-full px-3 border border-gray-400 dark:border-gray-600">
                  <div className=" w-full h-full rounded-xl ">
                    <Calendar />
                  </div>
                 </div>


                </div>

            </div>           
            </div>
            {/* END OF PLAN YOUR DAY COMPONENT */}

          </div>
         </div>
        </div>
        </>
    )
}