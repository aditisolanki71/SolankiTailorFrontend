import React from 'react';
import { Route } from 'react-router';
//import { getUrl as getRoutePath } from './helpers/url-manager';
import RouterLoader from './components/router-loader';
//import './register-routes';

//file-2
export default (hostName, pathName, cookie) => {
  let component;
  component = (
    <Route>
      <Route path="/">
        <Route
          // path={getRoutePath('landing')}
          path="/landing"
          component={RouterLoader({
            loader: () => import('./containers/landing')
          })}
        />
      </Route>
    </Route>
  );
  return component;
};