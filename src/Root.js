import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import async from './middlewares/async';
import stateValidator from './middlewares/stateValidator';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );

  return (
    <BrowserRouter>
      <Provider store={store}>
        {children}
      </Provider>
    </BrowserRouter>
  );
};