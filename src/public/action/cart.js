import axios from 'axios'

const IP = `https://clonecarousel.herokuapp.com`
export const getCart = (id_user) => {
    return {
        type: 'GET_CART',
        payload: axios.get(`${IP}/cart/${id_user}`)
    }
}

export const deleteCart = (data) => {
	return {
		type: 'DELETE_CART',
		payload: axios.delete(`${IP}/cart?id_user=${data.id_user}&id_product=${data.id_product}`)
	}
}