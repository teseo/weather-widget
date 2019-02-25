import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const initialState = {};

const middleware = [thunk];

const configureStore = (initialState: Object = {}) => {
  // @ts-ignore
  const enableDevTools = !!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  // @ts-ignore
  const composeEnhancers = enableDevTools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  const enhancers = composeEnhancers(applyMiddleware(...middleware));

  return createStore(reducers, initialState, enhancers);
};

const store = configureStore({});


export default store;
