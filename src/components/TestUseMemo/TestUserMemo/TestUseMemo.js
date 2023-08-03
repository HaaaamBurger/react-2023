import {useCallback, useMemo} from 'react';

const TestUseMemo = ({data,setData}) => {

    console.log('TestUser Render');



    const expensiveCalc = () => {
        for (let i = 0; i <= 1000000000; i++) {
            if (i === 1000000000) {
                console.log('Test')
                return data;
            }
        }
    };

    const calcResult = useMemo(() => expensiveCalc(),[data]);
    // const calcResult = expensiveCalc();

    return (

        <div>
            <div>{calcResult}</div>
        </div>
    );
};

export {
    TestUseMemo,
};