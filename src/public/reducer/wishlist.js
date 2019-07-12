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
              isError: true
            }
        case "CREATE_WISHLIST_FULFILLED" :
            return {
              ...state,
              isLoading: false,
              isError: false,
              // data: action.payload.data.data.id_product
              data: state.data.filter(wishlist => {
                        wishlist.data[0].id_product !== action.payload.data.data
                    })
              // data: action.payload.data.data

            }
      default:
          return state;
    }
}

export default wishlist