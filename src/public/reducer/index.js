import { combineReducers } from 'redux'

import product from './product'
import login from './login'
import category from './category'
import user from './user'

const Appreducer = combineReducers({
    product,
    login,
    category,
    user
})

export default Appreducer