const baseURL = process.env.REACT_APP_API;

const urls = {
    cars: {
        base: '/cars',
        byId: (id:number):string => `/cars/${id}`
    }
}

export {urls,baseURL}