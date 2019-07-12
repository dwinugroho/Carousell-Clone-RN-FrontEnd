const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    subCategory:[]
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
        default:
            return state
    }
}