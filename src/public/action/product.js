import axios from 'axios'

// const IP = `https://clonecarousel.herokuapp.com/products`
export const getProduct = () => {
    return {
        type: 'GET_PRODUCT',
        payload: axios.get(`https://clonecarousel.herokuapp.com/products`)
    }
}
export const getProductSell = (id) => {
    return {
        type: 'GET_PRODUCT_SELL',
        payload: axios.get(`https://clonecarousel.herokuapp.com/products/user/${id}`)
    }
}