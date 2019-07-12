const initialState = {
    data: [],
    isLoading: false,
    isError: false
 };

wishlist = (state = initialState, action) => {
    switch (action.type) {
    	case "GET_WISHLIST_PENDING" :
            return {
              ...state,
              isLoading: true,
              isError: false
            }
        case "GET_WISHLIST_REJECTED" :
            return {
            	...state,
              isLoading: false,
              isError: true
            }
        case "GET_WISHLIST_FULFILLED" :
            return {
              ...state,
              isLoading: false,
              isError: false,
              data: action.payload.data
            }
      default:
          return state;
    }
}

export default wishlist