const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export default forgetPass = (state = initialState, action) => {
	switch (action.type) {
        case "SEND_EMAIL_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "SEND_EMAIL_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "SEND_EMAIL_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }

        case "RESET_PASSWORD_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "RESET_PASSWORD_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "RESET_PASSWORD_FULFILLED":
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