//Libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Styles
import './index.css';

//App
import App from './App';
//I don't know
import * as serviceWorker from './serviceWorker';

//Render app
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
