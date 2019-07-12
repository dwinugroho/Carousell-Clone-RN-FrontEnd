import axios from 'axios'

const IP = `https://clonecarousel.herokuapp.com`
export const getWishlist = (id_user, id_product) => {
    return {
        type: 'GET_WISHLIST',
        payload: axios.get(`${IP}/wishlist?id_user=${id_user}`)
    }
}

export const deleteWishlist = (id_user, id_product) => {
	console.warn(id_user)
    return {
        type: 'DELETE_WISHLIST',
        payload: axios.delete(`${IP}/wishlist?id_user=${id_user}&id_product=${id_product}`)
    }
}