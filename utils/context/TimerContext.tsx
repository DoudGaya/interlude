import { useContext, createContext, ReactNode } from "react";

const TimerContext = createContext('')

const TimeProvider = ({children}:{ children: ReactNode}) => {
    return <TimerContext.Provider value="plans">
            {children}
            </TimerContext.Provider>
}
export {TimeProvider, TimerContext}
