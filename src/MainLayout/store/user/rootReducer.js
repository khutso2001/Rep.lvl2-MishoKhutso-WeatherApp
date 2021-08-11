import { combineReducers } from "redux";
import user from "./userReducer";
import products from "./userReducer";
const appReducer=combineReducers({
  user,
  products,
})


export default appReducer;

