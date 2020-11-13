import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './components/Header.jsx'

import App from './routes/App';

ReactDOM.render(<App />, 
    
    <Provider>
        <App />
    </Provider>,
    
    document.getElementById('app')
);