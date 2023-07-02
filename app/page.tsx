import { Navigation } from "./Navigation"
import { Banner } from "./Banner"
import { HomeDashbord } from "@/components/home/Dashbaord"
import { About } from "@/components/home/About"
import { Testimonials } from "@/components/home/Testimonials"
import Link from "next/link"

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
            <div className="max-w-[1200px] space-y-6 flex flex-col py-20 mx-auto">
              <Testimonials />
            </div>
          </div>

          <div className=" dark:bg-slate-900 bg-slate-200 w-full">
            <div className="mx-auto text-center flex space-y-10 flex-col py-20 items-center justify-center max-w-[800px]">
              <p className=" text-xl">whether it's just for you, your team or your business, we offer interlude in three plans</p>
                <div className=" grid grid-cols-3 gap-x-6 ">
                  {times.map((t: Times ) => {
                    return (
                    <div key={t.id} className="  flex items-center space-y-4 flex-col">
                      <p className=" text-xl font-semibold">Interlude</p>
                      <div className="h-[200px] w-[200px] flex bg-gradient-radial border-indigo-700 to-indigo-700 via-indigo-800 from-indigo-900 text-white items-center justify-center rounded-full border-4">
                        <p className=" text-7xl font-primary">{t.time}</p>
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
      </main>
  )
}
