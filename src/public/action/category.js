import axios from 'axios'

// const IP = `https://clonecarousel.herokuapp.com/products`
export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(`https://clonecarousel.herokuapp.com/categories`)
    }
}
export const getSubCategory = (id) => {
    return {
        type: 'GET_SUBCATEGORY',
        payload: axios.get(`https://clonecarousel.herokuapp.com/sub_category/${id}`)
    }
}