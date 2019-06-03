import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const composeEnhancer = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const middlewares = process.env.NODE_ENV === 'production' ? [thunkMiddleware] : [thunkMiddleware, createLogger()]

export default function configureStore (preloadedState) {
  return createStore(rootReducer, preloadedState, composeEnhancer(applyMiddleware(...middlewares)))
}
