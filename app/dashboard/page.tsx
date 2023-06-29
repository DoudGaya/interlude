'use client'
import React from "react";
import firebase_app from "@/utils/firebase/config";
import { signOut } from "firebase/auth";
import { UserDashboard } from "@/components/dashboard/UserDashboard";
import { useAuthContext } from "@/utils/context/AuthContext";
import { useRouter } from "next/navigation";
function Dashbaord() {
    const { user }: any = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])
  

    return (
      <div className="">
        <UserDashboard user={user} />
      </div>
    );
}

export default Dashbaord;