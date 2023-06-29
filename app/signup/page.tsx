'use client'
import React from "react";
import signUp from "@/utils/firebase/signup";
import { Navigation } from "../Navigation";
import { useRouter } from 'next/navigation';
import { useId } from "react";
import Link from "next/link";
import addData from "@/utils/firebase/firestore/addData";
import { useAuthContext } from "@/utils/context/AuthContext";

function SignUp() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    const [validator, setValidator] = React.useState(false)
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('')
    const router = useRouter()


    // CHECK IF THERE IS A LOGGED IN USER AND REDIRRECT TO DASHBOARD
    const { user }: any = useAuthContext()
    React.useEffect(() => {
        if (user!== null) router.push("/dashboard")
    }, [user])




    const ids = useId()

    const handleForm = async (event: any) => {
        event.preventDefault()

        if ( password !== passwordConfirmation) {
            setValidator((prev) => {
                return prev = !prev
            })
            return;
        }

        const data = {
            name: name,
            email: email,
            password: password 
          }
          const { dbRecords, dberror } = await addData('users', ids, data)
      
          if (dberror) {
            return console.log(dberror)
          }

        const { result, error } = await signUp(email, name, password);

        if (error) {
            return console.log(error)
        }
        // else successful
        console.log(result)
        return router.push("/dashboard")
    }

    return (
    <div className="">
    <Navigation />
    <div className=" w-full grid grid-cols-2 h-[80vh] ">
      <div className="">
            Image here 
      </div>
      <div className=" flex flex-col items-center w-full justify-center">
            <form onSubmit={handleForm} className=" space-y-3 max-w-[350px] w-full px-4 py-6 flex flex-col">
                <div className=" py-4 border-b mb-6 border-primary text-2xl font-logo">
                    <p>Create an Account </p>
                </div>
                { validator && <small className=" text-red-700">Password confirmation does not match</small>}
                <label htmlFor="email" className=" flex flex-col ">
                    <p className=" font-primary text-gray-700">Name</p>
                    <input className=" focus:border-b transition-all delay-100 duration-150 focus:border-primary py-2 px-4 outline-none" onChange={(e) => setName(e.target.value)} required type="name" name="name" id="name" placeholder="John Wick" />
                </label>
                <label htmlFor="email" className=" flex flex-col ">
                    <p className=" font-primary text-gray-700">Email</p>
                    <input className=" focus:border-b transition-all delay-100 duration-150 focus:border-primary py-2 px-4 outline-none" onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password" className="flex flex-col ">
                    <p className=" font-primary text-gray-700">Password</p>
                    <input className=" focus:border-b transition-all delay-100 duration-150 focus:border-primary py-2 px-4 outline-none" onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>

                <label htmlFor="password" className="flex flex-col">
                    <p className=" font-primary text-gray-700">Confirm Password</p>
                    <input className=" focus:border-b transition-all delay-100 duration-150 focus:border-primary py-2 px-4 outline-none" onChange={(e) => setPasswordConfirmation(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>

                <button type="submit" className=" text-white font-semibold bg-primary  my-4 py-2">Sign up</button>
            </form>

            <div className="">Already have an account? <Link href={'/login'} className=" dark:text-white border-b-2 border-primary">Log In</Link> </div>
        </div>

        </div>
    </div>
    );
}

export default SignUp;