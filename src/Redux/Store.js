import { createStore } from "redux";
import LoginReducer from "./Login/LoginReducer";
import CardReducer from "./Card/CardReducer";
import { combineReducers } from "redux";

const store = createStore(LoginReducer);

export default store;
