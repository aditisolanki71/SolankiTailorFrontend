import React from 'react';
import { Route } from 'react-router';
import App from './App'
import { getUrl as getRoutePath } from './helpers/url-manager';
import RouterLoader from './components/router-loader';
import './register-routes';

//file-2
export default (hostName, pathName, cookie) => {
  let component;
  console.log('hello',getRoutePath('landing'))
  component = (
    <Route>
      <Route
          path={getRoutePath('landing')}
          component={RouterLoader({
            loader: () => import('./containers/landing')
          })}
        />
       <Route component={App} path="/" />
    </Route>
  );
  return component;
};