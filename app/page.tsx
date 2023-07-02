import { Navigation } from "./Navigation"
import { Banner } from "./Banner"
import { HomeDashbord } from "@/components/home/Dashbaord"
import { About } from "@/components/home/About"
import { Testimonials } from "@/components/home/Testimonials"
import Link from "next/link"
import { MobileFooter } from "@/components/MobileFooter"
import { MobileHeader } from "@/components/MobileHeader"

interface Times {
  id?: number;
  time?: number

}


const times: Times[] = [
  {
    id: 1,
    time: 30,
  },
  {
    id: 2,
    time: 45,
  },
  {
    id: 3,
    time: 60,
  }
]


export default async function Home() {
  return (
       <>
        <div className="fixed flex lg:hidden dark:bg-black bg-white w-full bottom-0 left-auto">
          <MobileFooter />
        </div>
        <div className="fixed flex lg:hidden border-b border-b-primary/60 shadow-lg dark:bg-black bg-white w-full top-0 left-auto">
          <MobileHeader />
        </div>
        <main className="">
       
        <Navigation />
        <div className="bg-gradient-to-br from-white via-primary/15 to-white">
          <Banner />
        </div>
          <div className="w-full bg-white dark:bg-black py-10 ">
            <HomeDashbord />
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-900">
            <div className=" mx-auto max-w-[1200px] ">
              <About />
            </div>
          </div>

          <div className=" bg-white dark:bg-black">
            <div className="max-w-[1200px] px-10 space-y-6 flex flex-col py-20 mx-auto">
              <Testimonials />
            </div>
          </div>

          <div className=" dark:bg-slate-900 bg-slate-200 px-10 w-full">
            <div className="mx-auto text-center flex space-y-10 flex-col py-20 items-center justify-center max-w-[800px]">
              <p className=" text-xl font-logo">whether it's just for you, your team or your business, we offer interlude in three plans</p>
                <div className=" grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-3 gap-x-6 ">
                  {times.map((t: Times ) => {
                    return (
                    <div key={t.id} className=" border-b border-slate-800 dark:border-slate-300 py-6  flex items-center space-y-4 flex-col">
                      <p className=" text-xl font-semibold dark:text-gray-400">Interlude</p>
                      <div className="h-[200px] flex-col w-[200px] flex bg-gradient-radial border-indigo-700  text-white items-center justify-center rounded-full border-4">
                        <p className=" text-7xl text-gray-800 dark:text-gray-200 font-primary">{t.time}</p>
                        <small className=" text-lg tracking-wider text-gray-500 ">00:00:00</small>
                      </div>
                    </div>
                    )
                  })}
                
                </div>
                <div className="w-full ">
                    <Link target="_blank" className=" text-white bg-secondary px-10 py-3" href={'https://interlude.digital'}>Subcribe</Link>
                  </div>
            </div>
          </div>


          
          <div className=" bg-white dark:bg-black">
            <div className="max-w-[1200px] px-10 space-y-6 flex items-center justify-center py-[100px] flex-col  mx-auto">
              <small className="text-md">Designed and Developed by</small>
             <p className=" text-3xl text-center lg:text-7xl font-logo">Abdulrahman Dauda Gaya</p>
             <p>Thank You. <span  className=" font-bold">Interlude</span> and <span  className=" font-bold">CodeMonk</span></p>

             <div className=" ">
                  <p className=" dark:text-gray-300 max-w-[600px] text-justify mx-auto">
                    The Dashbord may contain a little bug with the timer, but most the features implented there works as expected.
                    I also wanted to integrate the <span className=" font-bold cursor-pointer hover:underline">OpenAI's</span> GPT-3 landuage model
                    but my time is limited because I'm alone in my team and could not find others to join me and wanted to practice
                    healthy and productive work habib without getting burned out like <span className="text-primary font-bold hover:underline cursor-pointer">Interlude</span> recommended
                    and it was a fun experience. I also wanted to redesign all other pages on the original <Link href={'https://interlude.digital'} className="text-primary font-bold hover:underline cursor-pointer">Interlude.com</Link> website
                    but again, the time is limited. I'll try to debug the application and the updated version will always be found here.
                  </p>

                  <p className=" font-logo text-center mt-10 text-2xl">Technologies Used</p>
                  <ul className=" flex flex-col items-center space-x-4 lg:flex-row w-full space-y-6 lg:space-y-0 lg:justify-between my-6">
                    <li><Link className=" px-6 py-2 hover:bg-gray-950 hover:text-gray-300 dark:bg-slate-800 rounded-lg bg-black text-white" href={'https://nextjs.org'}>Next.JS</Link></li>
                    <li><Link className=" px-6 py-2 hover:bg-gray-950 hover:text-gray-300 dark:bg-slate-800 rounded-lg bg-black text-white" href={'https://typescriptlang.org'}>TypeScript</Link></li>
                    <li><Link className=" px-6 py-2 hover:bg-gray-950 hover:text-gray-300 dark:bg-slate-800 rounded-lg bg-black text-white" href={'https://firebase.google.com/'}>Google Firebase</Link></li>
                    <li><Link className=" px-6 py-2 hover:bg-gray-950 hover:text-gray-300 dark:bg-slate-800 rounded-lg bg-black text-white" href={'https://react.dev'}>React</Link></li>
                    <li><Link className=" px-6 py-2 hover:bg-gray-950 hover:text-gray-300 dark:bg-slate-800 rounded-lg bg-black text-white" href={'https://tailwindcss.com'}>TailwindCSS</Link></li>
                  </ul>
             </div>
            </div>
          </div>


      </main>
       </>
  )
}
