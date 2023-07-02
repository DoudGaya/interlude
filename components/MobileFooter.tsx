import Link from "next/link"


export const MobileFooter = () => {
  return (
    <div className=' w-full bg-white dark:bg-black border-b-primary '>
        <div className=" flex justify-between py-3 px-4">
            <Link className=" text-lg py-2 px-6 border-secondary rounded-lg border-2" href={'/signup'}>Log In</Link>
            <Link className=" text-lg py-2 px-6 bg-primary rounded-lg " href={'/login'}>Regsiter</Link>
        </div>
    </div>
  )
}
