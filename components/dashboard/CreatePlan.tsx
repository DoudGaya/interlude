import {useContext, useState, useId} from 'react'
import {RiTimerFlashLine} from 'react-icons/ri'
import {RiRestTimeLine} from 'react-icons/ri'
import { TimerContext } from '@/utils/context/TimerContext'


interface TimeData {
    id: number
    workTime: string;
    restTime: string;
}


// @ts-ignore
export const CreatePlan = ( { closeModal }) => {


    const id = useId()


    // @ts-ignore
    const {createPlan, plans } = useContext(TimerContext)

    const [timeData, setTimeData] = useState([])
    const [name, setName] = useState('')
    const [noTimeErr, setNoTimeErr] = useState(false)
    const[timeInputs, setTimeInputs] = useState({
        workTime: '',
        restTime: ''
    })


    const handleFormSubmit = (event: any) => {
        event.preventDefault()
        createPlan(name, id, timeData)
        closeModal(false)
    }

    const handleTimeChange = (event: any) => {
        const {value, name} = event.target
        setTimeInputs((prev: any) => {
            return {...prev,[name]: value};
        })
    }


    const planNameInput = (event: any) => {
        const {value} = event.target
        setName(value)

    }


    const addingTimes = (event: any) => {
        event.preventDefault()
        if(!timeInputs){
           setNoTimeErr(true)
           return;
        } else {
            //@ts-ignore
           setTimeData((prev: TimeData []) => {
            let newTimeInputs = {...timeInputs, id: new Date}
            return  [...prev, newTimeInputs];
           })
           setTimeInputs({
            workTime: '', 
            restTime: ''
        })
        }
    }



  return (
    <div className=' w-2/6 relative mx-auto z-10 py-10 bg-white dark:bg-black px-6 border border-gray-300 dark:border-gray-600 rounded-lg'>
        <button onClick={() => closeModal(false)} className=' top-3 absolute right-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <form className=' flex flex-col space-y-6' onSubmit={handleFormSubmit}>
            <p className=' font-logo text-2xl border-b border-primary'>Create a Plan</p>
            <label htmlFor="planName" className=' space-y-1'>
                <p className=''>Plan Name</p>
                <input type="text" onChange={planNameInput} placeholder='My Plan' className=' focus:outline-none bg-gray-200 dark:bg-gray-800 px-4 w-full py-2 rounded-lg' />
            </label>

            <label htmlFor="planName">
                <p>Plan Name</p>
                <div className=" flex space-x-3 overflow-hidden">
                    <input type="number" value={timeInputs.workTime} className='focus:outline-none bg-gray-200 dark:bg-gray-800 px-4 w-1/2 py-2 rounded-lg' name='workTime' onChange={handleTimeChange} placeholder='Work'  />
                    <input type="number" value={timeInputs.restTime}  className='focus:outline-none bg-gray-200 dark:bg-gray-800 px-4 w-1/2 py-2 rounded-lg' name='restTime' onChange={handleTimeChange} placeholder='Break' />
                    <button onClick={addingTimes} className=' bg-primary text-white p-2 rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </label>
            <hr className=' border-primary'/>
            <div className=" flex flex-col space-y-4">
               {
                timeData.length ? timeData.map((itm: any) => {
                   return (
                        <>
                        <div key={itm.id} className=" flex justify-between px-2 border-b rounded-b-lg py-1 border-gray-500 dark:border-gray-600 ">
                        <small className=' text-xs flex '>
                            <span>{itm.workTime} mins - work</span> 
                            <RiTimerFlashLine />
                        </small>
                        <small className=' text-xs flex '>
                            <span>{itm.restTime} mins - break</span>
                            <RiRestTimeLine /> 
                        </small>
                        </div>
                    </>
                   )
                }) : ''
               }
            </div>
            {/* <button onClick={()=>setOpen(false)}>Close Modal</button> */}
            <button className=' w-full bg-primary py-2 rounded-lg'>Submit</button>
        </form>
    </div>
  )
}
