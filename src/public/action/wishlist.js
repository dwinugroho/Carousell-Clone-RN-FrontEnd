import axios from 'axios'

const IP = `https://clonecarousel.herokuapp.com`
export const getWishlist = (id_user, id_product) => {
    return {
        type: 'GET_WISHLIST',
        payload: axios.get(`${IP}/wishlist?id_user=8`)
    }
}