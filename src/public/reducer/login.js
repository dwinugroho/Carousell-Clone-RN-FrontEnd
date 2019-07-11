//import { setValue } from '../stroge/asynstroge'
import { AsyncStorage } from 'react-native'

const initialState = {
    data: [],
    token: [],
    isLoading: false,
    isError: false
  };
  
login = async (state = initialState, action) => {
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
          await AsyncStorage.setItem('Token', action.payload.data.token);
          return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload.data.data,
            token: action.payload.data.token,
          };
      default:
        return state;
    }
  };

export default login