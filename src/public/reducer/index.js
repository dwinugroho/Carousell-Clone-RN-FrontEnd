import { combineReducers } from 'redux'

import product from './product'
import login from './login'
import category from './category'
import user from './user'
import wishlist from './wishlist'

const Appreducer = combineReducers({
    product,
    login,
    category,
    user,
    wishlist,
})

export default Appreducer