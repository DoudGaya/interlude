
// import restmp3 from '../../public/sounds/rest.mp3'
// import workmp3 from '../../public/sounds/work.mp3'


import { useEffect, useId, useRef, useState, createContext, ReactNode } from "react";
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
    // const workAudioRefs = useRef(new Audio(workmp3))
    // const restAudioRefs = useRef(new Audio(restmp3))
    const [plans, setPlans] = useState<Plans[]>([
        {
            id: '1',
            name: 'My monday Plan',
            timeSpan: [
               {
                id:'1',
                workTime: '20',
                restTime: '10'
               },
               {
                id: '2',
                workTime: '15',
                restTime: '10'
               },
               {
                id: '3',
                workTime: '30',
                restTime: '20'
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
    const [activePlanId, setActivePlanId] = useState(0)
    const [activePlan, setActivePlan] = useState(plans[activePlanId] || plans[0]) 
    const {timeSpan} = activePlan    
    const [activeTimeSpan, setActiveTimeSpan] = useState(timeSpan)
    const [currentTimerIndex, setCurrentTimerIndex] = useState(0);
    //@ts-ignore
    const [workTimeLeft, setWorkTimeLeft] = useState(Number(activeTimeSpan[currentTimerIndex].workTime));
    // @ts-ignore
    const [restTimeLeft, setRestTimeLeft] = useState(Number(activeTimeSpan[currentTimerIndex].restTime));
    const [isBreak, setIsBreak] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

        if (!isBreak){

            //@ts-ignore
            let wTimer;
            if (isRunning) {
            wTimer = setInterval(() => {
                setWorkTimeLeft(prevTimeLeft => prevTimeLeft - 1);
            }, 1000);
            }
            
            if (workTimeLeft === 0) {
                clearInterval(wTimer);
                setWorkTimeLeft(0)
                handleTimerEnd();
            }

            return () => {
                // @ts-ignore
              clearInterval(wTimer);
            };
      } else {

         // @ts-ignore
         let rTimer;
         if (isRunning) {
           rTimer = setInterval(() => {
             setRestTimeLeft(prevTimeLeft => prevTimeLeft - 1);
           }, 1000);
         }
     
         if (restTimeLeft === 0) {
           clearInterval(rTimer);
           setRestTimeLeft(0)
           handleTimerEnd();
         }
     
         return () => {
             // @ts-ignore
           clearInterval(rTimer);
         };

      }

      }, [isRunning, workTimeLeft, activePlan, restTimeLeft]);
    
      // const handleTimerEnd = () => {
      //   if (isBreak) {
      //     playAudio(restAudioRefs.current)
      //     setIsBreak(false);
      //     startNextTimer();
      //   } else {
      //     playAudio(workAudioRefs.current)
      //     setRestTimeLeft(0)
      //     setIsBreak(true);
      //     startRestTimer();
      //   }
      // };

      const handleTimerEnd = () => {
        if (isBreak) {
          // playAudio(restAudioRefs);
          setIsBreak(false);
          startNextTimer();
          setIsRunning(true);
        } else {
          // playAudio(workAudioRefs);
          if (currentTimerIndex + 1 < activeTimeSpan.length) {
            setWorkTimeLeft(Number(activeTimeSpan[currentTimerIndex + 1].workTime));
            setIsRunning(true);
          } else {
            console.log('Well done');
            setIsRunning(false);
          }
          setRestTimeLeft(Number(activeTimeSpan[currentTimerIndex].restTime));
          setIsBreak(true);
        }
      };
      

      
    
      const startNextTimer = () => {
        const nextTimerIndex = currentTimerIndex + 1;
        const prevTimeIndex = currentTimerIndex - 1
        if (nextTimerIndex < activeTimeSpan.length) {
          setCurrentTimerIndex(nextTimerIndex);
          setWorkTimeLeft(Number(activeTimeSpan[nextTimerIndex].workTime));
          setIsRunning(true)
        } else {
          console.log('Well done');
        }
      };
    
      const startRestTimer = () => {
        const restTime = Number(activeTimeSpan[currentTimerIndex].restTime);
        setRestTimeLeft(restTime);
      };
    
      const playAudio = (audioFile: any) => {
        audioFile.current.play()
      };
    
      const handleButtonClick = () => {
        if (isRunning) {
          setIsRunning(false);
        } else {
          setIsRunning(true);
          setWorkTimeLeft(Number(activeTimeSpan[currentTimerIndex].workTime));
          setRestTimeLeft(Number(activeTimeSpan[currentTimerIndex].restTime));
        }
    };


    //  FUNCTIONS
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

// FUNCTIONS
//     const deletePlan = (id: string) => {
//        let newArr = []
//        for(let i=0;i<plans.length;i++){
//         if(plans[i].id !== id){
//             newArr.push(plans[i])
//         } else {
//             continue
//         }
//     } 
//     if (activePlan.id === id) {
//         //@ts-ignore
//         setActivePlan(plans[0])
//     }
//     setPlans(newArr)
// }

const deletePlan = (id: string) => {
  const updatedPlans = plans.filter((plan) => plan.id !== id);

  if (activePlan.id === id) {
    if (updatedPlans.length > 0) {
      setActivePlan(updatedPlans[0]);
      setActiveTimeSpan(updatedPlans[0].timeSpan);
      setCurrentTimerIndex(0);
      setWorkTimeLeft(Number(updatedPlans[0].timeSpan[0].workTime));
      setRestTimeLeft(Number(updatedPlans[0].timeSpan[0].restTime));
    } else {
      //@ts-ignore
      setActivePlan(null);
      setActiveTimeSpan([]);
      setCurrentTimerIndex(0);
      setWorkTimeLeft(0);
      setRestTimeLeft(0);
    }
  }

  setPlans(updatedPlans);
};



const updateActivePlan = (id: string) => {
  const activePlan = plans.find((plan) => plan.id === id);
  if (activePlan) {
    setActivePlan(activePlan);
    setActiveTimeSpan(activePlan.timeSpan);
    setWorkTimeLeft(Number(activePlan.timeSpan[currentTimerIndex].workTime));
    setRestTimeLeft(Number(activePlan.timeSpan[currentTimerIndex].restTime));
    // setActivePlanId(id);
    setIsRunning(false)
  }
};

     // @ts-ignore
    return <TimerContext.Provider value={{ createPlan, currentTimerIndex, isRunning, restTimeLeft, workTimeLeft, handleButtonClick, plans, deletePlan, activePlan, updateActivePlan }}>{children}</TimerContext.Provider>
} 
export {TimeProvider, TimerContext}