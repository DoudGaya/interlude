

import { Navigation } from "./Navigation"
import { Banner } from "./Banner"
import { HomeDashbord } from "@/components/home/Dashbaord"


export default function Home() {
  return (
      <main className=" bg-white dark:bg-black ">
        <Navigation />
        <div className="bg-gradient-to-br from-white via-primary/15 to-white">
          <Banner />
        </div>
          <HomeDashbord />
      </main>
  )
}
