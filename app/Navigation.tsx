import  Link from "next/link"
import  DarkButton  from "@/components/DarkMode"


export const Navigation = () => {
    return (
       <header className=" w-full hidden bg-white dark:bg-black sticky z-10 top-0 shadow-sm shadow-primary/10 h-full lg:flex">
         <div className=" w-full items-center flex max-w-[1200px] py-2 mx-auto justify-between ">
            <Link href="/" className=" font-logo font-bold text-2xl text-primary">
                Interlude<span className=" text-secondary">.</span>
            </Link>

            <ul className=" flex py-3 space-x-6">
              
                <li className=" flex">
                    <Link href={'/signup'} >
                        <span className="px-6 py-3 hover:bg-secondary text-white bg-primary rounded-lg">
                            Get Started
                        </span>
                    </Link>
                </li>
                <li className=" flex">
                    <Link href={'/login'} >
                        <span className="px-6 py-3 hover:bg-primary/30 border-2 text-primary border-primary rounded-lg">
                            Log In
                        </span>
                    </Link>
                </li>

                <li className=" mx-3">
                    <DarkButton />
                </li>
            </ul>
        </div>
       </header>
    )
}