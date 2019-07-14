const initialState = {
    data: [],
    seller: [],
    isLoading: false,
    isError: false
 };

user = (state = initialState, action) => {
    switch (action.type) {
    	case "GET_USER_PENDING" :
            return {
              ...state,
              isLoading: true,
              isError: false
            }
        case "GET_USER_REJECTED" :
            return {
            	...state,
              isLoading: false,
              isError: true
            }
        case "GET_USER_FULFILLED" :
            return {
              ...state,
              isLoading: false,
              isError: false,
              data: action.payload.data
            }
        case "GET_SELLER_PENDING" :
            return {
              ...state,
              isLoading: true,
              isError: false
            }
        case "GET_SELLER_REJECTED" :
            return {
              ...state,
              isLoading: false,
              isError: true
            }
        case "GET_SELLER_FULFILLED" :
            return {
              ...state,
              isLoading: false,
              isError: false,
              data: action.payload.data.data
            }
        case "UPDATE_SELLER_PENDING" :
            return {
              ...state,
              isLoading: true,
              isError: false
            }
        case "UPDATE_SELLER_REJECTED" :
            return {
              ...state,
              isLoading: false,
              isError: true
            }
        case "UPDATE_SELLER_FULFILLED" :
            return {
              ...state,
              isLoading: false,
              isError: false,
              data: action.payload.data.data
            }
        default:
        	return state;
    }
}

export default user