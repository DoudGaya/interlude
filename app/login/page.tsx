'use client'
import React from "react";
import { Navigation } from "../Navigation";
import signIn from "@/utils/firebase/signin";
import { useRouter } from 'next/navigation'
import { useAuthContext } from "@/utils/context/AuthContext";
import Link from "next/link";
import interludeLogo from '@/public/interlude_logo.svg'
import Image from "next/image";
import { MobileFooter } from "@/components/MobileFooter";
import { MobileHeader } from "@/components/MobileHeader";

function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState()
    const router = useRouter()


    const { user }: any = useAuthContext()

    React.useEffect(() => {
        if (user!== null) router.push("/dashboard")
    }, [user])



    const handleForm = async (event: any) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/dashboard")
    }
    return (
    <div className=" ">
    <div className="fixed flex lg:hidden dark:bg-black bg-white w-full bottom-0 left-auto">
        <MobileFooter />
    </div>
    <div className="fixed flex lg:hidden border-b border-b-primary/60 shadow-lg dark:bg-black bg-white w-full top-0 left-auto">
        <MobileHeader />
    </div>
    <Navigation />
    <div className=" w-full grid lg:grid-cols-2 grid-cols-1 my-auto py-20 ">
      <div className=" w-full h-full flex justify-center items-center">
        <div className=" flex flex-col justify-center space-y-6 items-center ">
        <Image alt="Interlude" className=" h-[100px] w-[100px]" src={interludeLogo} />
        <p className=" text-6xl text-primary font-logo font-bold ">Interlude<span className=" text-secondary">.</span></p>
        <p className=" text-2xl font-logo text-center">breaks power productivity. Interlude powers breaks.</p>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center">
            <form onSubmit={handleForm} className=" max-w-[350px] w-full px-4 py-6 flex flex-col">
                <div className=" py-4 border-b mb-6 border-primary text-2xl font-logo">
                    <p>Log In</p>
                </div>
                <label htmlFor="email" className=" flex flex-col space-y-3">
                    <p className=" font-primary">Email</p>
                    <input className=" py-2 px-4 outline-none" onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password" className="flex flex-col space-y-3">
                    <p className=" font-primary">Password</p>
                    <input className=" py-2 px-4 outline-none" onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit" className=" text-white font-semibold bg-primary  my-4 py-2">Log In</button>
            </form>

            <div className="">Don't have an account? <Link href={'/signup'} className=" dark:text-white border-b-2 border-primary">Register</Link> </div>
        </div>

        </div>
    </div>
    );
}

export default Login;