'use client'
import React from "react";
import { UserDashboard } from "@/components/dashboard/UserDashboard";
import { useAuthContext } from "@/utils/context/AuthContext";
import { useRouter } from "next/navigation";
import { TodoProvider } from "@/utils/context/TodoContext";

import { TimeProvider } from "@/utils/context/TimerContext";
function Dashbaord() {
    const { user }: any = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])
  

    return (
      <div className="">
        <TodoProvider>
          <TimeProvider>
            <UserDashboard user={user} />
        </TimeProvider>
        </TodoProvider>
      </div>
    );
}

export default Dashbaord;