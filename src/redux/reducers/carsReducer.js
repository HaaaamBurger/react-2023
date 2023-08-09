const initialState = {
    cars: []
}
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARS':
            return {
                ...state,
                cars: action.payload
            }
        case 'DELETE_CAR_BY_ID':
            return {
                ...state,
                cars: state.cars.filter(car => car.id !== action.payload)
            }
        case 'UPDATE_CAR_BY_ID':
            const carIndex = state.cars.findIndex(car => car.id === action.payload.carId);
            state.cars[carIndex] = {id: action.payload.carId, ...action.payload.data};

            return state;
        default:
            return state
    }

}
export {carsReducer};