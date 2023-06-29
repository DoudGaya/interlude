import { Navigation } from "./Navigation"
import { Banner } from "./Banner"
import { HomeDashbord } from "@/components/home/Dashbaord"


export default async function Home() {
  return (
      <main className="">
        <Navigation />
        <div className="bg-gradient-to-br from-white via-primary/15 to-white">
          <Banner />
        </div>
          <div className=" w-full bg-white dark:bg-black py-10 ">
            <HomeDashbord />
          </div>
      </main>
  )
}
