import React, {useEffect, useState} from 'react';

const PostUser = () => {

    const [userInfo,setUserInfo] = useState({
        name: '',
        username: ''
    })

    const handleFormChange = (e,key) => {
        e.preventDefault();
        setUserInfo((prevState) => {
            return {
                ...prevState,
                [key]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo)
    }

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users',{
            method: 'POST',
            body: JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(json => console.log(json));
    },[])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={'name'} value={userInfo.name} onChange={(e) => handleFormChange(e,'name')}/>
                <input type="text" placeholder={'username'} value={userInfo.username} onChange={(e) => handleFormChange(e,'username')}/>
                <button type={'submit'}>submit</button>
            </form>
        </div>
    );
};

export {
    PostUser,
};