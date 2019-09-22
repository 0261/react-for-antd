import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './styles/app.css';

interface CustomWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
}
const customWindow = window as CustomWindow;
const devTools = customWindow.__REDUX_DEVTOOLS_EXTENSION__ && customWindow.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(<Root />, document.getElementById('root'));
