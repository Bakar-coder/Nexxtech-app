import { REMOVE_ERRORS, GET_DATA, SET_CURRENT, LOGOUT } from "../types";
import registerUser from "./registerUser";
import loginUser from "./loginUser";

const getData = data => async dispatch =>
  dispatch({
    type: GET_DATA,
    payload: data
  });

const setCurrent = user => async dispatch =>
  dispatch({
    type: SET_CURRENT,
    payload: user
  });

const logoutUser = history => async dispatch => {
  try {
    localStorage.removeItem("x-auth-token");
    dispatch({
      type: LOGOUT,
      payload: history
    });
  } catch (ex) {
    localStorage.removeItem("x-auth-token");
  }
};

const removeError = () => dispatch => dispatch({ type: REMOVE_ERRORS });

export {
  registerUser,
  loginUser,
  removeError,
  getData,
  setCurrent,
  logoutUser
};
