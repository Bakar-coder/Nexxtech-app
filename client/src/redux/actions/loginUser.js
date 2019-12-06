import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types";
import axios from "axios";

const loginUser = (user, history) => async dispatch => {
  try {
    const { data } = await axios.post("/users/login", user);
    localStorage.setItem("x-auth-token", data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: { data, history } });
  } catch (ex) {
    if (
      (ex.response && ex.response.status >= 400) ||
      (ex.response && ex.response.status <= 500)
    ) {
      dispatch({ type: LOGIN_FAIL, payload: ex.response.data.msg });
      localStorage.removeItem("x-auth-token");
    } else {
      dispatch({ type: LOGIN_FAIL, payload: "Something went wrong!" });
      localStorage.removeItem("x-auth-token");
    }
  }
};

export default loginUser;
