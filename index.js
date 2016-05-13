require('foundation-sites/scss/foundation.scss');
import './stylesheets/index.scss';
import 'foundation-sites';

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
