import { combineReducers } from 'redux'

import product from './product'
import login from './login'

const Appreducer = combineReducers({
    product,
    login
})

export default Appreducer