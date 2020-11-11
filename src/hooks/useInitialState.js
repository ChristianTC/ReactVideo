import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    //useState, videos: nombre de la variable, setVideos:Actualizar al estado
    const [ videos, setVideos ] = useState([]);
    //useEffect
    useEffect(() => {
        //fetch recibe la api
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []);

    return videos;
};


export default useInitialState;
