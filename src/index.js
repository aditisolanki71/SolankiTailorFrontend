import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import './font-awesome.js';
import getroutes from './routes';
const mountNode = document.getElementById('content');
//file-1
const render = routes => {
  match(
    { history: browserHistory, routes },
    (error, redirectLocation, renderProps) => {
      ReactDOM.render(
        <Router
          {...renderProps}
          history={browserHistory}
        >
          {routes}
        </Router>,
        mountNode
      );
    }
  );
};
render(getroutes(window.location.host, window.location.pathname));

if (module.hot) {
  module.hot.accept(['./App', './routes'], () => {
    render(getroutes(window.location.host, window.location.pathname));
  });
}
