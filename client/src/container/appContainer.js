import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { removeError, getData, setCurrent } from "../redux/actions";
import App from "../App";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import Jwt from "jwt-decode";

const AppContainer = ({ success_msg, error_msg, removeError, setCurrent }) => {
  useEffect(() => {
    const token = localStorage.getItem("x-auth-token");
    if (token) {
      const user = Jwt(token);
      setCurrent(user);
    }
  }, [setCurrent]);

  if (success_msg) {
    toast.success(success_msg);
    setTimeout(() => removeError(), 5000);
  }

  if (error_msg) {
    toast.error(error_msg);
    setTimeout(() => removeError(), 5000);
  }

  return (
    <Fragment>
      <App />
    </Fragment>
  );
};

const mapState = state => ({
  success_msg: state.auth.success_msg,
  error_msg: state.auth.error_msg
});

const mapDispatch = dispatch =>
  bindActionCreators({ removeError, getData, setCurrent }, dispatch);

export default connect(
  mapState,
  mapDispatch
)(AppContainer);
