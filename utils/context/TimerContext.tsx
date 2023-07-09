import useSound from 'use-sound';
import { useEffect, useRef, useState, createContext, ReactNode } from "react";

interface TimeSpan {
  id: number;
  workTime: string;
  restTime: string;
}

interface Plan {
  id: string;
  name: string;
  timeSpan: TimeSpan[];
}

interface TimerContextType {
  createPlan: (name: string, planId: string, timeData: TimeSpan[]) => void;
  deletePlan: (id: string) => void;
  updateActivePlan: (id: string) => void;
  currentTimerIndex: number;
  isRunning: boolean;
  restTimeLeft: number;
  workTimeLeft: number;
  handleButtonClick: () => void;
  plans: Plan[];
  activePlan: Plan | null;
}

const TimerContext = createContext<TimerContextType>({
  createPlan: () => {},
  deletePlan: () => {},
  updateActivePlan: () => {},
  currentTimerIndex: 0,
  isRunning: false,
  restTimeLeft: 0,
  workTimeLeft: 0,
  handleButtonClick: () => {},
  plans: [],
  activePlan: null,
});

const TimeProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  //@ts-ignore
  const [playRest, { stopRest }] = useSound('../../public/sounds/rest.mp3');
  //@ts-ignore
  const [playWork, { stopWork }] = useSound('../../public/sounds/work.mp3');
  const [plans, setPlans] = useState<Plan[]>([
    {
      id: '1',
      name: 'My Monday Plan',
      timeSpan: [
        {
          id: 1,
          workTime: '20',
          restTime: '10',
        },
        {
          id: 2,
          workTime: '15',
          restTime: '40',
        },
        {
          id: 3,
          workTime: '50',
          restTime: '20',
        },
      ],
    },
    {
      id: '2',
      name: 'M Productive plan',
      timeSpan: [
        {
          id: 1,
          workTime: '20',
          restTime: '10',
        },
        {
          id: 2,
          workTime: '15',
          restTime: '10',
        },
        {
          id: 3,
          workTime: '30',
          restTime: '20',
        },
      ],
    },
    {
      id: '3',
      name: 'Flexible plan',
      timeSpan: [
        {
          id: 1,
          workTime: '20',
          restTime: '10',
        },
        {
          id: 2,
          workTime: '15',
          restTime: '10',
        },
        {
          id: 3,
          workTime: '30',
          restTime: '20',
        },
      ],
    },
    // Other plans...
  ]);

  const [activePlanId, setActivePlanId] = useState<string>('1');
  const activePlan = plans.find((plan) => plan.id === activePlanId) || null;
  const { timeSpan = [] } = activePlan || {};

  const [activeTimeSpan, setActiveTimeSpan] = useState<TimeSpan[]>(timeSpan);
  const [currentTimerIndex, setCurrentTimerIndex] = useState<number>(0);
  const [workTimeLeft, setWorkTimeLeft] = useState<number>(Number(activeTimeSpan[currentTimerIndex]?.workTime) || 0);
  const [restTimeLeft, setRestTimeLeft] = useState<number>(Number(activeTimeSpan[currentTimerIndex]?.restTime) || 0);
  const [isBreak, setIsBreak] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleTimerEnd = () => {
    if (isBreak) {
      setIsBreak(false);
      startNextTimer();
      setIsRunning(true);
    } else {
      if (currentTimerIndex + 1 < activeTimeSpan.length) {
        setWorkTimeLeft(Number(activeTimeSpan[currentTimerIndex + 1]?.workTime) || 0);
        setIsRunning(true);
      } else {
        console.log('Well done');
        setIsRunning(false);
      }
      setRestTimeLeft(Number(activeTimeSpan[currentTimerIndex]?.restTime) || 0);
      setIsBreak(true);
    }
  };

  const startNextTimer = () => {
    const nextTimerIndex = currentTimerIndex + 1;
    if (nextTimerIndex < activeTimeSpan.length) {
      setCurrentTimerIndex(nextTimerIndex);
      setWorkTimeLeft(Number(activeTimeSpan[nextTimerIndex]?.workTime) || 0);
      setRestTimeLeft(Number(activeTimeSpan[nextTimerIndex]?.restTime) || 0);
      setIsRunning(true);
    } else {
      console.log('Well done');
    }
  };

  const startRestTimer = () => {
    const restTime = Number(activeTimeSpan[currentTimerIndex]?.restTime) || 0;
    setRestTimeLeft(restTime);
  };

  const handleButtonClick = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  };

  const createPlan = (name: string, planId: string, timeData: TimeSpan[]) => {
    setPlans((prevPlans) => {
      const newPlan: Plan = {
        id: planId,
        name: name,
        timeSpan: timeData,
      };
      return [...prevPlans, newPlan];
    });
  };

  const deletePlan = (id: string) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);

    if (activePlan?.id === id) {
      if (updatedPlans.length > 0) {
        setActivePlanId(updatedPlans[0].id);
        setActiveTimeSpan(updatedPlans[0].timeSpan);
        setCurrentTimerIndex(0);
        setWorkTimeLeft(Number(updatedPlans[0].timeSpan[0].workTime));
        setRestTimeLeft(Number(updatedPlans[0].timeSpan[0].restTime));
      } else {
        setActivePlanId('');
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
      setActivePlanId(activePlan.id);
      setActiveTimeSpan(activePlan.timeSpan);
      setWorkTimeLeft(Number(activePlan.timeSpan[currentTimerIndex]?.workTime) || 0);
      setRestTimeLeft(Number(activePlan.timeSpan[currentTimerIndex]?.restTime) || 0);
      setIsRunning(false);
    }
  };

  useEffect(() => {
    let timerId: any; 

    if (!isBreak) {
      if (isRunning) {
        timerId = setInterval(() => {
          setWorkTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000 * 60);
      }

      if (workTimeLeft === 0) {
        clearInterval(timerId);
        playRest(); // Play the rest sound
        handleTimerEnd();
      }

      return () => {
        clearInterval(timerId);
      };
    } else {
      if (isRunning) {
        timerId = setInterval(() => {
          setRestTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000 * 60);
      }

      if (restTimeLeft === 0) {
        clearInterval(timerId);
        playWork(); // Play the rest sound
        handleTimerEnd();
      }

      return () => {
        clearInterval(timerId);
      };
    }
  }, [isRunning, workTimeLeft, activePlan, restTimeLeft, isBreak, handleTimerEnd, playRest]);

  return (
    <TimerContext.Provider
      value={{
        createPlan,
        deletePlan,
        updateActivePlan,
        currentTimerIndex,
        isRunning,
        restTimeLeft,
        workTimeLeft,
        handleButtonClick,
        plans,
        activePlan,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimeProvider, TimerContext };
