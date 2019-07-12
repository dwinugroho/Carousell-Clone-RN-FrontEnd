import axios from 'axios'

export const sendEmail = (data) => {
    return {
        type: 'SEND_EMAIL',
        payload: axios.post(`https://clonecarousel.herokuapp.com/reset_password/send`,data)
    }
}
export const resetPassword = (data) => {
    return {
        type: 'RESET_PASSWORD',
        payload: axios.post(`https://clonecarousel.herokuapp.com/reset_password`,data)
    }
}