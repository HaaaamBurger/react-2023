const AppRoutes = {
    TODOS: '/todos',
    ALBUMS: '/albums',
    COMMENTS: '/comments',
    POSTS: '/comments/:id'
}
const AppRoutesLink = [
    {
        path: '/todos',
        label: 'Todos'
    },
    {
        path: '/albums',
        label: 'Albums'
    },
    {
        path: '/comments',
        label: 'Comments'
    }
]

export {AppRoutes,AppRoutesLink};