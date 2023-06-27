export const Timer = () => {
    return (
        <div className="flex flex-col  w-full items-center">
        <div className="rounded-xl  px-4 py-3  justify-center w-full flex flex-col border border-gray-300">
            <div className=" flex items-baseline ">
            <div className=" font-bold text-2xl font-primary text-gray-950 dark:text-gray-200">02:00:00</div>
                <span className="  rounded-lg px-2 text-secondary ">work</span>
            </div>
           <div className=" flex space-y-3 justify-between items-baseline ">
            <div className=" flex justify-between items-baseline">
            <span className='  font-semi'>2</span>
             <span className='  font-semi'>hrs</span>
            </div>
           </div>
         </div>
        </div>
    )
}