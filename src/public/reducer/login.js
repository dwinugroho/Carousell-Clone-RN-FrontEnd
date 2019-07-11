const initialState = {
    data: [],
    token: [],
    isLoading: false,
    isError: false
  };
  
  export default login = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER_PENDING":
          return {
              ...state,
            isLoading: true
          };
        case "LOGIN_USER_REJECTED":
          return {
            token: {},
            isLoading: false,
            isError: true,
          };
      case "LOGIN_USER_FULFILLED":
        const { token, type } = action.payload.data.token;
        setValue("token", JSON.stringify(type + " " + token));
        console.log(action.payload.data.token);
        return {
          ...state,
           data: action.payload.data.data,
          token: action.payload.data.token,
        };
      default:
        return state;
    }
  };