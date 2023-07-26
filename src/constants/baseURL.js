const baseURL = 'https://api.themoviedb.org/3';

const links = {
    movies: (page) => `/discover/movie?page=${page}`
}
export {baseURL,links};