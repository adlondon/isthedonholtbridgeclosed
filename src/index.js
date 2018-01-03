import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk)(createStore));
const store = createStoreWithMiddleware(reducers);
import './../sass/style.scss';
require('dotenv').config({path: __dirname + '/.env'})


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  , document.querySelector('.page-container'));
