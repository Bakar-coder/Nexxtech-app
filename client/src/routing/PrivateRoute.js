import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  console.log(user);
  return (
    <>
      <Route
        {...rest}
        render={props =>
          !user ? <Redirect to="/login" /> : <Component {...props} />
        }
      />
    </>
  );
};

const mapState = state => ({
  user: state.auth.user
});

export default connect(
  mapState,
  null
)(PrivateRoute);
