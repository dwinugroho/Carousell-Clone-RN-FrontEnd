import { combineReducers } from 'redux'

import product from './product'
import login from './login'
import category from './category'

const Appreducer = combineReducers({
    product,
    login,
    category
})

export default Appreducer