import React from 'react';

// importar browser router, el cual va a encapsular todos los elementos.
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';

// funcion que va a exponer Browser Router
const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
);

export default App;