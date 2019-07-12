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
		payload: axios.delete(`${IP}/cart/${data.id_user}?id_product=${data.id_product}`)
	}
}

export const addCart = (data) => {
	return {
		type: 'ADD_CART',
		payload: axios.post(`${IP}/cart/${data.id_user}?id_product=${data.id_product}&jumlah=${data.jumlah}`)
	}
}