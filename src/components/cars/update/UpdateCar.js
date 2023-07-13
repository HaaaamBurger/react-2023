// import React, {useState} from 'react';
//
// const UpdateCar = () => {
//     const [userInfo,setUserInfo] = useState({
//         id: '',
//         brand: '',
//         price: '',
//         year: ''
//     })
//
//
//     const handleFormChange = (e,key) => {
//         e.preventDefault();
//         setUserInfo(prevState => {
//             return{
//                 ...prevState,
//                 [key]: e.target.value
//             }
//         })
//     }
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         try{
//             fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${userInfo.id}`,{
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json;charset=utf-8'
//                 },
//                 body: JSON.stringify({
//                     brand: userInfo.brand,
//                     price: userInfo.price,
//                     year: userInfo.year
//                 })
//             })
//         }catch (e){
//             console.log(e);
//         }
//         console.log(userInfo)
//         // setUserInfo({
//         //     id: '',
//         //     brand: '',
//         //     price: '',
//         //     year: ''
//         // })
//     }
//
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <p>Update Car</p>
//                 <input type="number" placeholder={'Car Id'} value={userInfo.id} onChange={(e) => handleFormChange(e,'id')}/>
//                 <input type="text" placeholder={'Brand'} value={userInfo.brand} onChange={(e) => handleFormChange(e,'brand')}/>
//                 <input type="number" placeholder={'Price'} value={userInfo.price} onChange={(e) => handleFormChange(e,'price')}/>
//                 <input type="number" placeholder={'Year'} value={userInfo.year} onChange={(e) => handleFormChange(e,'year')}/>
//                 <button>Update</button>
//             </form>
//
//         </div>
//     );
// };
//
// export {
//     UpdateCar,
// };