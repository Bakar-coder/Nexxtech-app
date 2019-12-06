import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../../redux/actions";
import { isValidEmail } from "../../utils/validation";
import "./auth.scss";

const Login = ({ auth, history, loginUser }) => {
  const [state, setstate] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = e => {
    setstate({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmition = e => {
    e.preventDefault();
    const user = state;
    if (auth.error_msg) return;
    if (!isValidEmail(email)) return toast.error("Invalid Email Address.");
    loginUser(user, history);
  };

  const { email, password } = state;

  return (
    <>
      <form onSubmit={handleFormSubmition} className="form">
        <div className="form-header">
          <h3>Sign In</h3>
        </div>

        <div className="form-group">
          <input
            type="email"
            className={
              email && !isValidEmail(email)
                ? "form-control danger"
                : "form-control"
            }
            name="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email Address"
            required
          />
          <label
            htmlFor="email"
            className={
              email && !isValidEmail(email)
                ? "label danger"
                : isValidEmail(email)
                ? "label success"
                : "label"
            }
          >
            {email && !isValidEmail(email) ? "Invalid Email" : "Email"}
          </label>
        </div>

        <div className="form-group">
          <input
            type="password"
            className={
              password && password.length < 8
                ? "form-control danger"
                : "form-control"
            }
            name="password"
            id="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Password"
            required
            minLength="8"
          />
          <label
            htmlFor="password"
            className={
              password && password.length < 8
                ? "label danger"
                : password.length > 0
                ? "label success"
                : "label"
            }
          >
            {password && password.length < 8
              ? "Password must be atleast 8 characters"
              : "Password"}
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <span>
          Not registered ? <Link to="/register">Register</Link>
        </span>
      </form>
    </>
  );
};

const mapState = state => ({
  auth: state.auth
});

const mapDispatch = dispatch => bindActionCreators({ loginUser }, dispatch);

export default connect(
  mapState,
  mapDispatch
)(withRouter(Login));
