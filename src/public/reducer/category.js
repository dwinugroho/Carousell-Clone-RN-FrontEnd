const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    subCategory:[]
}

export default category = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORY_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_CATEGORY_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "GET_CATEGORY_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case "GET_SUBCATEGORY_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_SUBCATEGORY_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "GET_SUBCATEGORY_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                subCategory: action.payload.data.data
            }
        default:
            return state
    }
}