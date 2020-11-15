// describir la informacion y pasar el objeto a los reducers
export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    // payload es el elemento que se le manda a esta funcion
    payload, 
});

