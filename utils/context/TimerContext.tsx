import { useContext, useEffect, useId, useState, createContext, ReactNode } from "react";


interface Plans {
    id: string;
    name: string;
    timeSpan: {
        id: string;
        workTime: string;
        restTime: string;
    }[];
}[]


const TimerContext = createContext([]);

const TimeProvider = ({children}:{ children: ReactNode}): ReactNode => {
    const ids = useId()
    const [plans, setPlans] = useState<Plans[]>([
        {
            id: '1',
            name: 'My monday Plan',
            timeSpan: [
               {
                id:'1',
                workTime: '60',
                restTime: '30'
               },
               {
                id: '2',
                workTime: '60',
                restTime: '30'
               },
               {
                id: '3',
                workTime: '60',
                restTime: '30'
               }
            ]
        },

        {
            id: '2',
            name: 'My productive work plan',
            timeSpan: [
               {
                id: '1',
                workTime: '60',
                restTime: '30'
               },
               {
                id: '2',
                workTime: '60',
                restTime: '30'
               },
               {
                id: '3',
                workTime: '60',
                restTime: '30'
               }
            ]
        },

        {
            id: '3',
            name: 'My friday plan',
            timeSpan: [
               {
                id: '1',
                workTime: '60',
                restTime: '30'
               },
               {
                id: '2',
                workTime: '60',
                restTime: '30'
               },
            ]
        }
    ])
    const [activePlan, setActivePlan] = useState(plans[0] || [] )

    


    const createPlan = ( name: string, planId: string, timeData: Plans[] ) => {
        setPlans((prev: any) => {
            let newPlan = {
                id: planId,
                name: name,
                timeSpan: timeData
            }
           return prev = [...prev, newPlan]
        })
    }


    const deletePlan = (id: string) => {
       let newArr = []
       for(let i=0;i<plans.length;i++){
        if(plans[i].id !== id){
            newArr.push(plans[i])
        } else {
            continue
        }
    } 
    if (activePlan.id === id) {
        //@ts-ignore
        setActivePlan(plans[0])
    }
    setPlans(newArr)
}

useEffect(() => {
    updateActivePlan(activePlan?.id || plans[0]?.id || '')
}, [plans])


const updateActivePlan = (id: string) => {
    for (let i = 0; i < plans.length; i++) {
        if (plans[i].id === id){
           return setActivePlan(plans[i])
        } else {
            continue
        }
    }
}

     // @ts-ignore
    return <TimerContext.Provider value={{ createPlan, plans, deletePlan, activePlan, updateActivePlan }}>{children}</TimerContext.Provider>
} 
export {TimeProvider, TimerContext}
