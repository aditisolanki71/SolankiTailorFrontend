import { FETCH, FETCH_FAIL, FETCH_SUCCESS } from "./constants.js";
import RequestReducer from "../requestreducer";

const initialState = {
  users_result: {},
  users_loading: false,
  users_error: false,
};

export function reducer(state = initialState, action = {}) {
  const usersRead = new RequestReducer(action, {
    name: "users",
    start: FETCH,
    success: FETCH_SUCCESS,
    fail: FETCH_FAIL,
  });

  return {
    ...state,
    ...usersRead,
  };
}
