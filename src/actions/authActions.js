import { startFetch, endFetch, errorFetch } from "./statusActions";
import { signin } from "../data/users";

export const SET_AUTH = "SET_AUTH ";

export function setAuth(user) {
  return {
    type: SET_AUTH,
    payload: user,
  };
}

export function fetchAuthAsync(email, password) {
  return async function (dispatch, getState) {
    try {
      dispatch(startFetch());
      const user = await signin(email, password);

      if (user) {
        dispatch(setAuth(user));
        dispatch(errorFetch(""));
        dispatch(endFetch());
        return Promise.resolve();
      }
    } catch (error) {
      dispatch(setAuth(null));
      dispatch(errorFetch(error));
      dispatch(endFetch());
      return Promise.reject();
    }
  };
}
