import axios from 'axios'

const IP = `https://clonecarousel.herokuapp.com`
export const getActivity = (id_user) => {
    return {
        type: 'GET_ACTIVITY',
        payload: axios.get(`${IP}/checkout?id_user=${id_user}`)
    }
}
