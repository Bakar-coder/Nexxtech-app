import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REMOVE_ERRORS,
  SET_CURRENT
} from "../types";

import Jwt from "jwt-decode";

const authState = {
  user: null,
  isAuth: false,
  success_msg: null,
  error_msg: null
};

export default (state = authState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT:
      return {
        ...state,
        user: payload,
        isAuth: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        success_msg: payload.msg
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error_msg: payload
      };
    case LOGIN_SUCCESS:
      const token = payload.data.token;
      const user = Jwt(token);
      payload.history.replace("/");
      return {
        ...state,
        user,
        success_msg: payload.data.msg
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error_msg: payload
      };
    case LOGOUT:
      payload.location = "/";
      return {
        ...state,
        user: null,
        isAuth: null,
        success_msg: "You've successfully logged-out your account."
      };
    case REMOVE_ERRORS:
      return {
        ...state,
        success_msg: null,
        error_msg: null
      };
    default:
      return state;
  }
};
