import { combineReducers } from 'redux'

import product from './product'
import login from './login'
import user from './user'

const Appreducer = combineReducers({
    product,
    login,
    user
})

export default Appreducer