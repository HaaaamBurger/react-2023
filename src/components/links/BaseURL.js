const BaseURL = 'https://jsonplaceholder.typicode.com';

const links = {
    users: () => `${BaseURL}/users`,
    posts: (id) => `${BaseURL}/users/${id}/posts`,
}


export {BaseURL,links};