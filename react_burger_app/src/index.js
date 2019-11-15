import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// Firebug DB end point 
// https://react-my-burger-cd26f.firebaseio.com/

// Link - https://console.firebase.google.com/u/1/project/react-my-burger-cd26f/database/react-my-burger-cd26f/data
