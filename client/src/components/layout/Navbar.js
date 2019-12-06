import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
const Navbar = ({ auth, logoutUser, history }) => {
  const [state, setstate] = useState({
    isOpen: false
  });

  const onLogout = e => {
    e.preventDefault();
    logoutUser(history);
  };

  const { user } = auth;
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <h3>
            <Link to="/" className="link-item">
              TechHub Africa
            </Link>
          </h3>
        </div>
        <ul className="list-group">
          <li className="list-item">
            <Link className="link-item" to="/">
              Home
            </Link>
          </li>

          <li className="list-item">
            <Link className="link-item" to="/about">
              About
            </Link>
          </li>

          <li className="list-item">
            <Link className="link-item" to="/work">
              Work
            </Link>
          </li>

          <li className="list-item">
            <Link className="link-item" to="/contact">
              Contact Us
            </Link>
          </li>

          {user && (
            <li className="list-item">
              <Link className="link-item" to="/profile">
                {user.username}
              </Link>
            </li>
          )}

          {!user && (
            <li className="list-item">
              <Link className="link-item" to="/register">
                Sign Up
              </Link>
            </li>
          )}

          {!user && (
            <li className="list-item">
              <Link className="link-item" to="/login">
                Sign In
              </Link>
            </li>
          )}

          {user && (
            <li className="list-item">
              <form onSubmit={onLogout}>
                <input type="submit" value="Logout" />
              </form>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
