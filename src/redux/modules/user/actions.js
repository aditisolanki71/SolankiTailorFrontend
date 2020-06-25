import urls from "../../service-urls";
import { FETCH, FETCH_FAIL, FETCH_SUCCESS } from "./constants";

export function fetchUsers(offset, size) {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    promise: (client) =>
      client.get(`${urls.USER}`, {
        params: {
          offset: offset || 0,
          fullObject: true,
          size: size || 1000,
        },
        loader: false,
      }),
  };
}
