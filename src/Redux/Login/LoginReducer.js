import { LOGIN_TOKEN } from "./LoginType";
const initialState = {
  token: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_TOKEN:
      return {
        token: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
