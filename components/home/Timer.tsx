export const Timer = () => {
    return (
        <div className=" flex flex-col items-center">
        <div className=" rounded-full items-center text-primary justify-center h-[8rem] flex flex-col w-[8rem] border-4 border-primary">
            <div className=" flex items-baseline ">
             <span className=' text-5xl font-semi'>2</span>
             <span className=' text-2xl font-semi'>hrs</span>
            </div>
            <span>Work</span>
         </div>
         <div className=" font-primary">02:00:00</div>
        </div>
    )
}