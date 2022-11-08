import { loginToken } from "./LoginAction";
import { LOGIN_TOKEN } from "./LoginType";
const initialState = {
  token: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_TOKEN:
      return {
        token: "apple",
      };
    default:
      return state;
  }
};

export default LoginReducer;
