import React, {useState, useEffect } from 'react';
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';


import '../assets/styles/App.scss'

const App = () => {
    //useState, videos: nombre de la variable, setVideos:Actualizar al estado
    const [ videos, setVideos ] = useState([]);
    const API = 'http://localhost:3000/initalState';
    //useEffect
    useEffect(() => {
        //fetch recibe la api
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []);

    console.log(videos);

    return (
        <div className="App">
            <Header />
            <Search />
            {videos.mylist?.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }


            <Categories title="Trending">
                <Carousel>
                    {videos.trends?.map(item=>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originals">
                <Carousel>
                    {videos.originals?.map(item=>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Footer />

        </div>
    );
    }

export default App;