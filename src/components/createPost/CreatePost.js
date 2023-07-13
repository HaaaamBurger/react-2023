// import React, {useEffect, useState} from 'react';
//
// const CreatePost = () => {
//
//     const [userInfo,setUserInfo] = useState({
//         name: '',
//         email: '',
//         body: '',
//     });
//
//     const handleFormChange = (e,key) => {
//         e.preventDefault();
//         setUserInfo(prevState => {
//             return{
//                 ...prevState,
//                 [key]: e.target.value,
//             }
//         })
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         try{
//             fetch('https://jsonplaceholder.typicode.com/comments',{
//                 method: 'POST',
//                 body: JSON.stringify({
//                     name: userInfo.name,
//                     email: userInfo.email,
//                     body: userInfo.body,
//                 })
//             })
//                 .then(response => response.json())
//                 .then(json => console.log(json))
//         }catch (e){
//
//         }
//     }
//
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder={'name'} value={userInfo.name} onChange={(e) => handleFormChange(e,'name')}/>
//                 <input type="text" placeholder={'email'} value={userInfo.email} onChange={(e) => handleFormChange(e, 'email')}/>
//                 <input type="text" placeholder={'type any message'} value={userInfo.body} onChange={(e) => handleFormChange(e, 'body')}/>
//                 <button type={'submit'}>Submit</button>
//             </form>
//
//         </div>
//     );
// };
//
// export {
//     CreatePost,
// };