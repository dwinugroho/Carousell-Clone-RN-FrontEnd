const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    subCategory: []
}

export default cart = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CART_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_CART_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "GET_CART_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case "ADD_CART_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "ADD_CART_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "ADD_CART_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                // data: action.payload.data.data,...state.data
            }
        case "DELETE_CART_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "DELETE_CART_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "DELETE_CART_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: state.data.filter(data => data.id_product !== action.payload.data.data.id_product)
            }
        default:
            return state
    }
}