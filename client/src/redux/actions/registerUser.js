import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types";

const registerUser = (user, history) => async dispatch => {
  const userData = {
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password
  };
  try {
    const { data } = await axios.post("/users/register", userData);
    history.push("/login");
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (ex) {
    if (
      (ex.response && ex.response.status === 400) ||
      (ex.response && ex.response.status === 500)
    )
      dispatch({ type: REGISTER_FAIL, payload: ex.response.data.msg });
    else dispatch({ type: REGISTER_FAIL, payload: "Something went wrong!" });
  }
};

export default registerUser;
