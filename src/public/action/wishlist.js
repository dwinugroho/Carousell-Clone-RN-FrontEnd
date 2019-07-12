import axios from 'axios'

const IP = `https://clonecarousel.herokuapp.com`
export const getWishlist = (id_user, id_product) => {
    return {
        type: 'GET_WISHLIST',
        payload: axios.get(`${IP}/wishlist?id_user=${id_user}`)
    }
}

export const createWishlist = (id_user, id_product) => {
    return {
        type: 'CREATE_WISHLIST',
        payload: axios.post(`${IP}/wishlist?id_user=${id_user}&id_product=${id_product}`)
    }
}