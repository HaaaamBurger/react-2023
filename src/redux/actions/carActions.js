const carActions = {
    setCars: (cars) => ({type: 'SET_CARS', payload: cars}),
    deleteCarById: (id) => ({type: 'DELETE_CAR_BY_ID',payload: id}),
    updateCarById: (id,car) => ({type: 'UPDATE_CAR_BY_ID', payload: {data: car,carId: id}})
}

export {carActions};