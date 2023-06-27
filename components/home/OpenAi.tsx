export const OpenAi = () => {
    return (
        <div className=" flex flex-col w-full min-h-full justify-between">
            <div className=" flex items-center justify-center my-auto">
                <p className=" text-lg">Log In to Use this Features</p>
            </div>
            <div className="border border-gray-600 flex w-full items-center ">
               <input type="text" className=" w-full py-3 outline-none px-4 bg-transparent" />
               <button disabled className=" flex items-center space-x-2 bg-emerald-600 px-4 py-3 text-white">
                    <p>Generate</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
               </button>
            </div>
        </div>
    )
}