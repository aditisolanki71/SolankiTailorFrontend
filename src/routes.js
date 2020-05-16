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
         <Route
          path={getRoutePath('register')}
          component={RouterLoader({
            // loader: () => import('./containers/Register/register')
            loader: () => import('./containers/Auth/register')
          })}
        />
         <Route
          path={getRoutePath('login')}
          component={RouterLoader({
            // loader: () => import('./containers/Register/register')
            loader: () => import('./containers/Auth/login')
          })}
        />
         <Route
          path={getRoutePath('contact')}
          component={RouterLoader({
            // loader: () => import('./containers/Register/register')
            loader: () => import('./containers/Contact/contactus')
          })}
        />
       <Route component={App} path="/" />
    </Route>
  );
  return component;
};