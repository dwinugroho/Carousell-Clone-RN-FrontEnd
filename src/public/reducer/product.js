const initialState = {
    product: [],
    sellProduct: [],
    isLoading: false,
    isError: false,
    post:[]
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
        case "GET_PRODUCT_SELL_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_PRODUCT_SELL_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "GET_PRODUCT_SELL_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                sellProduct: action.payload.data.data
            }
        case "POST_PRODUCT_SELL_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "POST_PRODUCT_SELL_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "POST_PRODUCT_SELL_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                post: action.payload.data.data
            }
        default:
            return state
    }
}