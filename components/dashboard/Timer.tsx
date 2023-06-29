export const Timer = ({time}: any) => {
    return (
        <div className="flex flex-col  w-full items-center">
        <div className="rounded-xl  px-4 py-3  justify-center w-full flex flex-col border border-gray-300 dark:border-gray-600">
            <div className=" flex items-baseline ">
            <div className=" font-bold text-2xl font-primary text-gray-950 dark:text-gray-400">02:00:00</div>
            </div>
           <div className=" flex space-y-3 justify-between items-baseline ">
            <div className=" flex dark:text-gray-400 justify-between items-baseline">
            <span className='  font-semi'>{time}</span>
             <span className='  font-semi'>hrs</span> 
                <span className="  rounded-lg px-2 text-secondary ">focus work</span>
            </div>
           </div>
         </div>
        </div>
    )
}