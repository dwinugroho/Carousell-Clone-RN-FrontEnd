// import {setValue} from '../stroge/asynstroge'
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
        case "USER_REGISTER_PENDING":
          return {
              ...state,
            isLoading: true
          };
        case "USER_REGISTER_REJECTED":
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
      case "USER_REGISTER_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload.data.data,
        };
        case "EDIT_PASWORD":
            return {
                ...state,
                isLoading: true
            }
        case "EDIT_PASSWORD_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "EDIT_PASSWORD_FULFILLED":
            return {
                ...state,
                isLoading: false,
                data: state.data.map(value =>
                    (value.id_user == action.payload.data.data.id_user) ?
                        action.payload.data.data : value
                )
            }
      default:
        return state;
    }
  };