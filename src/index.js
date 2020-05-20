import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' 
import { Router, browserHistory, match } from 'react-router';
import './font-awesome.js';
import getroutes from './routes';
import store, { apiClient } from './redux';

window.__API__ = apiClient;
//window.__SCHEDULER__ = new DataFetchingScheduler(store);
const mountNode = document.getElementById('content');
//file-1
const render = routes => {
  match(
    { history: browserHistory, routes },
    (error, redirectLocation, renderProps) => {
      ReactDOM.render(
        <Provider store={store} key="provider">
        <Router
          {...renderProps}
          history={browserHistory}
        >
          {routes}
        </Router>
        </Provider>,
        mountNode
      );
    }
  );
};
render(getroutes(store,apiClient,window.location.host, window.location.pathname));

if (module.hot) {
  module.hot.accept(['./App', './routes'], () => {
    render(getroutes(store,apiClient,window.location.host, window.location.pathname));
  });
}
