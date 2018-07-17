import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter, Route } from 'react-router-dom'

const middlewares = [reduxThunk, logger]
const enhancer = applyMiddleware(...middlewares)
const store = createStore(rootReducer, composeWithDevTools(enhancer))

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
  <Route component={App} />
</Provider>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
