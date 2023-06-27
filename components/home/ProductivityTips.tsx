
export const ProductivityTips = () => {
    return (
    <div className=" grid grid-cols-3 w-full min-h-full justify-between">
        <div className=" w-full h-[30px]">
            <div className=" flex dark:bg-transparent items-center justify-center cursor-pointer dark:text-gray-400 space-x-3 bg-white py-6 px-3 border dark:border-gray-600 border-dashed divide-dashed rounded-lg shadow-md">
               <span> Create new todo</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
            </div>
        </div>
    </div>
    )
}