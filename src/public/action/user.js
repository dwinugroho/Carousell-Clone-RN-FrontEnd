import axios from 'axios'

const IP = `https://clonecarousel.herokuapp.com`
export const getUser = (username) => {
    return {
        type: 'GET_USER',
        payload: axios.get(`${IP}/users?username=${username}`)
    }
}