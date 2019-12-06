import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routing/Routes";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <ToastContainer />
      <Routes />
    </Layout>
  );
};

export default App;
