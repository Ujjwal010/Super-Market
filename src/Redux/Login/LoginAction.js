import { LOGIN_TOKEN } from "./LoginType";
export const loginToken = (loginToken) => {
  return {
    type: LOGIN_TOKEN,
    payload: loginToken,
  };
};
