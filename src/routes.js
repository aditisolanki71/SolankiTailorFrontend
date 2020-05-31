import React from "react";
import { Route } from "react-router";
import App from "./App";
import { getUrl as getRoutePath } from "./helpers/url-manager";
import RouterLoader from "./components/router-loader";
import "./register-routes";

//file-2
export default (store, client, hostName, pathName, cookie) => {
  console.log("inside routes.js", store);
  console.log("client", client);
  let component;
  console.log("hello", getRoutePath("landing"));
  component = (
    <Route>
      <Route
        path={getRoutePath("landing")}
        component={RouterLoader({
          loader: () => import("./containers/landing"),
        })}
      />
      <Route
        path={getRoutePath("register")}
        component={RouterLoader({
          // loader: () => import('./containers/Register/register')
          loader: () => import("./containers/Auth/register"),
        })}
      />
      <Route
        path={getRoutePath("login")}
        component={RouterLoader({
          // loader: () => import('./containers/Register/register')
          loader: () => import("./containers/Auth/login"),
        })}
      />
      <Route
        path={getRoutePath("contact")}
        component={RouterLoader({
          // loader: () => import('./containers/Register/register')
          loader: () => import("./containers/Contact/contact-us"),
        })}
      />
      <Route
        path={getRoutePath("blog")}
        component={RouterLoader({
          // loader: () => import('./containers/Register/register')
          loader: () => import("./containers/Blog/blog-page"),
        })}
      />
      <Route
        path={getRoutePath("blog-detail")}
        component={RouterLoader({
          // loader: () => import('./containers/Register/register')
          loader: () => import("./containers/Blog/blog-detail-page"),
        })}
      />
      <Route
        path={getRoutePath("faq-page")}
        component={RouterLoader({
          // loader: () => import('./containers/Register/register')
          loader: () => import("./containers/FAQ/faq-page"),
        })}
      />
      <Route component={App} path="/" />
    </Route>
  );
  return component;
};
