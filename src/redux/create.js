import { createStore as _createStore, applyMiddleware, compose } from "redux";
import createMiddleware from "./middleware/clientMiddleware";
import baseReducer from "./reducer";

export default function (data, client) {
  const middleware = [createMiddleware(client)];
  let enhancers = [applyMiddleware(...middleware)];
  const finalCreateStore = compose(...enhancers)(_createStore);
  const store = finalCreateStore(baseReducer(), data);
  store.replaceReducer(require("./reducer").default());
  return store;
}
