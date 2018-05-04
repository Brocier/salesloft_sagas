import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import createSagaMiddleware, {END} from 'redux-saga'
import reducer from './reducers'

import {routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction'
// import thunk from 'redux-thunk'

export default function configureStore(history) {
  // Apply saga middleware
  const sagaMiddleware = createSagaMiddleware()

  // Apply navigation middleware
  const routerHistory = routerMiddleware(history)

  // Middleware for logging redux action to console
  const logger = createLogger({collapsed: true})

  const store = createStore(reducer, composeWithDevTools(applyMiddleware(...[sagaMiddleware, routerHistory, logger])))

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  return store
}

// Borrowed heavily from
// https://github.com/redux-saga/redux-saga/blob/master/examples/real-world/stor
// e/configureStore.dev.js