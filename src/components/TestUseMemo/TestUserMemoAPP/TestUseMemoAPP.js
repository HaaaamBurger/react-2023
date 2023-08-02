
import {useState} from "react";
import {TestUseMemo} from "../TestUserMemo/TestUseMemo";

function TestUseMemoAPP() {

    const [data,setData] = useState(0);

    const [any,setAny] = useState(null);

    const handleSomething = () => {
        setAny(prevState => !prevState);
    }

    console.log('App Render');

    const handleClick = () => {
        setData(prevState => prevState + 1)
    }



    return (
        <div>
            <div>
                <TestUseMemo data={data}/>
                <button onClick={handleClick}>Click</button>
                <button onClick={handleSomething}>Test Render</button>
            </div>
        </div>
    );
}

export default TestUseMemoAPP;
