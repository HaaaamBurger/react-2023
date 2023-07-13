// import React, {useEffect, useState} from 'react';
//
// const CreateUser = () => {
//
//     const [userInfo,setUserInfo] = useState({
//         name: '',
//         username: ''
//     })
//
//     const handleFormChange = (e,key) => {
//         e.preventDefault();
//         setUserInfo((prevState) => {
//             return {
//                 ...prevState,
//                 [key]: e.target.value,
//             }
//         })
//     }
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         fetch('http://jsonplaceholder.typicode.com/users',{
//             method: 'POST',
//             body: JSON.stringify({
//                 name: userInfo.name,
//                 username: userInfo.username
//             })
//         })
//             .then(response => response.json())
//             .then(json => console.log(json));
//
//     }
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder={'name'} value={userInfo.name} onChange={(e) => handleFormChange(e,'name')}/>
//                 <input type="text" placeholder={'username'} value={userInfo.username} onChange={(e) => handleFormChange(e,'username')}/>
//                 <button type={'submit'}>submit</button>
//             </form>
//         </div>
//     );
// };
//
// export {
//     CreateUser,
// };