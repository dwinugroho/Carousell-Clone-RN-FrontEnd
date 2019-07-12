import axios from 'axios'

const IP = `https://clonecarousel.herokuapp.com`
export const getCart = (id_user) => {
    return {
        type: 'GET_CART',
        payload: axios.get(`${IP}/cart/${id_user}`)
    }
}