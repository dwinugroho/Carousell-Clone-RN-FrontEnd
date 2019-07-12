import { combineReducers } from 'redux'

import product from './product'
import login from './login'
import category from './category'
import user from './user'
import wishlist from './wishlist'
import cart from './cart'
import forgetPass from './forgeetPass'

const Appreducer = combineReducers({
    product,
    login,
    category,
    user,
    wishlist,
    cart,
    forgetPass
})

export default Appreducer