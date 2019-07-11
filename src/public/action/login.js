import axios from 'axios'

const IP = `https://clonecarousel.herokuapp.com/login`
export const signIn = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`https://clonecarousel.herokuapp.com/login`,data)
    }
}