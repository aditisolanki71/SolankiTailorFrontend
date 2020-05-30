import { combineReducers } from "redux";
import auth from "./modules/auth";
export default function () {
  return combineReducers({
    auth,
  });
}
