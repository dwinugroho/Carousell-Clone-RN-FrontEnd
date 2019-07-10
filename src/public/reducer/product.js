const initialState = {
    product: [],
    isLoading: false,
    isError: false
}

export default product = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_PRODUCT_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "GET_PRODUCT_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                product: action.payload.data.data
            }
        default:
            return state
    }
}