import React from 'react';

// importar browser router, el cual va a encapsular todos los elementos.
import { BrowserRouter, Route } from 'react-router-dom'; 
import Home from '../containers/Home';

// funcion que va a exponer Browser Router
const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
    </BrowserRouter>
);

export default App;