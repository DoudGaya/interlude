"use client"
import { ThemeProvider } from 'next-themes'
import {useState, useEffect} from 'react'
import SessionProvider from '@/components/SessionProvider'
import { authOptions } from '@/pages/api/auth/[...nextauth]'




const Providers = ({ children }: any) => {
    const [mounted, setMounted] = useState(false)

    useEffect( () => {
        setMounted(true)
    },[])

    if(!mounted) {
        return null
    }
    
    return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}

export default Providers