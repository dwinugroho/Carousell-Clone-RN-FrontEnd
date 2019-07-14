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

        case "CREATE_WISHLIST_PENDING" :
            return {
              ...state,
              isLoading: true,
              isError: false
            }
        case "CREATE_WISHLIST_REJECTED" :
            return {
              ...state,
              isLoading: false,
              isError: true,
            }
            case "CREATE_WISHLIST_FULFILLED" :
              return {
                ...state,
                isLoading: false,
                isError: false,
                data : action.payload.data.data,...state.data
            }
        case "DELETE_WISHLIST_PENDING" :
            return {
              ...state,
              isLoading: true,
              isError: false
            }
        case "DELETE_WISHLIST_REJECTED" :
            return {
              ...state,
              isLoading: false,
              isError: true
            }
        case "DELETE_WISHLIST_FULFILLED" :
            return {
              ...state,
              isLoading: false,
              isError: false,
              // data : action.payload.data.data
              // data: state.data.filter(val => (
              //   action.payload.data.data.id_product !== val.id_product
            // ))
            }
      default:
          return state;
    }
}

export default wishlist