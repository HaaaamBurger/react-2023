import {memo} from 'react';

const TestUseCallback = memo(({handleMessage}) => {

    console.log('Props Render')

    return (
        <div>
            <button onClick={handleMessage}>Message</button>
        </div>
    );
});

export {
    TestUseCallback,
};