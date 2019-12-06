import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutUser } from "../../redux/actions";
import Navbar from "./Navbar";
import "./layout.scss";

const Layout = ({ auth, children, logoutUser }) => {
  return (
    <Fragment>
      <Navbar auth={auth} logoutUser={logoutUser} />
      {children}
    </Fragment>
  );
};

const mapState = state => ({
  auth: state.auth
});

const mapDispatch = dispatch => bindActionCreators({ logoutUser }, dispatch);

export default connect(
  mapState,
  mapDispatch
)(Layout);
