import React, {useCallback, useMemo, useState} from 'react';
import {TestUseCallback} from "../TestUseCallBack/TestUseCallback";

const TestUserCallbackApp = () => {
    const [counter,setCounter] = useState(0);
    const [message,setMessage] = useState(0);

    const handleClick = () => {
        setCounter(prevState => prevState + 1)
    }

    const counterCalc = (number) => {
        for (let i = 0; i <= 1000000000; i++) {
            if (i === 1000000000) {
                return number += 1;
            }
        }
    }
    let counterResult =  useMemo(() => counterCalc(counter),[counter]);

    const handleMessage = useCallback(() => {
        setMessage(prevState => prevState + 1);
        console.log(`Hello ${message}`);
    },[message])

    return (
        <div>
            <div>{counterResult}</div>
            <TestUseCallback handleMessage={handleMessage}/>
            <button onClick={handleClick}>Count</button>

        </div>
    );
};

export {
    TestUserCallbackApp,
};