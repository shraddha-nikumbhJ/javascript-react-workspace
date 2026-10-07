import { useState,useEffect} from 'react';
import {useTimer} from './useTimer';

const Timer = () => {
 const {
        count, 
        status, 
        handleStart, 
        handleStop,
        handlePause, 
        handleResume
       } = useTimer();
    
    return (
        <>
           <button onClick={handleStart} disabled={status === "running"}>Start</button>
                {count}
            <button onClick={handleStop}>Stop</button>

            { count !== 0 && <button onClick={handlePause}>Pause</button>}
    
            { count !== 0 && <button onClick={handleResume}>Resume</button>}
        </>
    )
}

export default Timer;