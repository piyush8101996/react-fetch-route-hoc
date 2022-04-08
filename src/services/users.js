export const getUsers = (page=1) => {
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res)=>(res.json()))
};

export const userDelete = (userId) => {
    return fetch(`https://reqres.in/api/users/${userId}`,{
        method: 'DELETE'
    })
    .then((res)=>(res.status === 204));
};

export const createUser = (user) => {
    return fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(user)
    }).then((res)=>(res.status === 201? res.json(): new Error()));
};