import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8AiYdtavVzKNKECI6HZOB3ZOlLZcCCDA",
    authDomain: "web-messenger-da08e.firebaseapp.com",
    databaseURL: "https://web-messenger-da08e.firebaseio.com",
    projectId: "web-messenger-da08e",
    storageBucket: "web-messenger-da08e.appspot.com",
    messagingSenderId: "173276431873",
    appId: "1:173276431873:web:9d95ccc4d69419e4942200",
    measurementId: "G-4B9GY0CRJN"
  };


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
