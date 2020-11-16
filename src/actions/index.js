// describir la informacion y pasar el objeto a los reducers
export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    // payload es el elemento que se le manda a esta funcion
    payload, 
});

// lo que voy a eliminar
export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload,
});


export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
});

export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST',
    payload,
});

export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload,
})