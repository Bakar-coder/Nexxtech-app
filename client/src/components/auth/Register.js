import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import { Link, withRouter } from "react-router-dom";
import { registerUser } from "../../redux/actions";
import { isValidEmail } from "../../utils/validation";

const Register = ({ registerUser, history }) => {
  const [state, setstate] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password2: ""
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
    if (user.password !== user.password2)
      return toast.error("Passwords don't match.");
    if (!isValidEmail(email)) return toast.error("Invalid Email Address.");
    registerUser(user, history);
  };

  const { name, username, email, password, password2 } = state;

  return (
    <>
      <form onSubmit={handleFormSubmition} className="form">
        <div className="form-header">
          <h3>Sign Up</h3>
        </div>

        <div className="form-group">
          <input
            type="text"
            className={
              name && name.length < 3 ? "form-control danger" : "form-control"
            }
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Full Name"
            required
          />
          <label htmlFor="name" className="label">
            {name && name.length < 5 ? "Please Enter Full Name" : " Full Name"}
          </label>
        </div>

        <div className="form-group">
          <input
            type="text"
            className={
              username && username.length < 3
                ? "form-control danger"
                : "form-control"
            }
            name="username"
            id="username"
            value={username}
            onChange={handleInputChange}
            placeholder="Username"
            required
          />
          <label htmlFor="username" className="label">
            Username
          </label>
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
            className={email && !isValidEmail(email) ? "label danger" : "label"}
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
              password && password.length < 8 ? "label danger" : "label"
            }
          >
            {password && password.length < 8
              ? "Password must be atleast 8 characters"
              : "Password"}
          </label>
        </div>

        <div className="form-group">
          <input
            type="password"
            className={
              password2 !== password ? "form-control danger" : "form-control"
            }
            name="password2"
            id="password2"
            value={password2}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            required
          />
          <label
            htmlFor="password2"
            className={password2 !== password ? "label danger" : "label"}
          >
            {password2 && password2 !== password
              ? "Passwords don't match."
              : "Confirm Password"}
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <span>
          Already registered ? <Link to="/login">Login</Link>
        </span>
      </form>
    </>
  );
};

const mapState = state => ({
  auth: state.auth
});

const mapDispatch = dispatch => bindActionCreators({ registerUser }, dispatch);

export default connect(
  mapState,
  mapDispatch
)(withRouter(Register));
