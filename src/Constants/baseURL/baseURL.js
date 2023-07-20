const baseURL = 'https://jsonplaceholder.typicode.com';

const links = {
    todos: '/todos',
    albums: '/albums',
    comments: '/comments',
    posts: (id) => `/comments/${id}`
}

export {baseURL,links};