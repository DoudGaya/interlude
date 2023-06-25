import { FocusPlan } from './FocusPlan'

export const Planner = () => {
    return (
        <div className=" w-3/5 flex flex-col ">
        <div className=" flex ">
        <button className='flex outline-none bg-primary text-white space-x-2 mb-3 justify-center rounded-lg px-3 py-1 items-center'>
            <span>Start</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
        </button>
        </div>
            <FocusPlan />{/* FOCUS PLAN COMPONENT */}
        </div>
    )
}