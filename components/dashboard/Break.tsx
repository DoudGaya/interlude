export const WorkBreak = ( {breakTime}: any) => {
    return (
        <div className=" flex flex-col  w-full items-center">
        <div className=" rounded-xl  p-2 text-primary justify-center w-full flex flex-col border-2 border-primary/40">
            <div className=" flex flex-col items-baseline space-x-1 ">
                <div className=" font-bold text-2xl font-primary text-primary">30:00</div>
            </div>
           <div className=" flex space-y-3 justify-between items-baseline ">
            <div className=" flex justify-between items-baseline">
            <span className=' text-xl font-semi'>{breakTime}</span>
             <span className=' text-md font-semi'>mins</span>
            </div>
           <span className=" bg-emerald-500/50 rounded-lg px-3 text-emerald-900 text-sm ">break</span>
           </div>
         </div>
        </div>
    )
} 