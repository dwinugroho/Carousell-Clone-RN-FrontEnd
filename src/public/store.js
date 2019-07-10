// ini store
import { createStore,applyMiddleware} from 'redux'
import {createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'


import AppReducer from './reducer'

const logger = createLogger({})

const store =createStore(
    AppReducer,
    applyMiddleware(
        logger,
        promiseMiddleware
    )
 )

export default store