import  { useState, useEffect } from 'react';

export const useTimer = () => {
    const [count, setCount] = useState(0);
    const [status,setStatus] = useState("stopped");

    useEffect(() => {
        let timer ;

        if(status === "running"){
            timer= setInterval(() =>{
            setCount(prev => prev + 1);
        },200)
        }

        return () => {
            clearInterval(timer)
        };
    },[status]);
    
    const handleStart = () => {
        setStatus("running");
    }

    const handleStop = () => {
        setStatus("stopped");
        setCount(0);
    }

    const handlePause= () => {
        setStatus("stopped");
    }

    const handleResume = () => {
        setStatus("running");
    }
    return {
        count,
        status,
        handleStart,
        handleStop,
        handlePause,
        handleResume
    }
}