import'./foundation/css/foundation.min.css';
import './stylesheets/foundation-icons/foundation-icons.scss';
import './stylesheets/index.scss';
import './foundation/js/vendor/foundation.min.js';
//import 'foundation-sites/js/foundation.core.js';


import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './components/home';
import Dashboard from './components/dashboard';
import coffreoApp from './reducers/index'

let store = createStore(coffreoApp);

ReactDom.render(
  <Provider store={store}>
    <Home/>
  </Provider>, document.getElementById('app'));

$(document).foundation(); //initialize foundation
