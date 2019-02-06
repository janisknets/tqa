import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import dotenv from 'dotenv'
import './index.css';

dotenv.config()
store.subscribe(() => {})

const dom = <Provider store={store}>
  <App />
</Provider>



ReactDOM.render(dom, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
