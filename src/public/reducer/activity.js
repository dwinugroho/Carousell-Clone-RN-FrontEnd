const initialState = {
    data: [],
    isLoading: false,
    isError: false,
}

export default Activity = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ACTIVITY_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_ACTIVITY_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "GET_ACTIVITY_FULFILLED":
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