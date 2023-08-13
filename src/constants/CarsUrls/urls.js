const carsBaseURL = 'http://owu.linkpc.net/carsAPI/v1';

const carsUrls = {
    cars: '/cars',
    deleteCar: (id) => `/cars/${id}`,
    updateCar: (id) => `/cars/${id}`
}

export {carsUrls,carsBaseURL};