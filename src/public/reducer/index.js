import { combineReducers } from 'redux'

import product from './product'
import login from './login'
import category from './category'
import user from './user'
import cart from './cart'

const Appreducer = combineReducers({
    product,
    login,
    category,
    user,
    cart
})

export default Appreducer