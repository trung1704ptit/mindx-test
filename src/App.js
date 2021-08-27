import React from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import Routes from "./Routes";
import "./App.scss";

const App = (props) => {
  return (
    <div className="app-container">
        <div className="content-inner">
          <Routes />
        </div>
    </div>
  );
};

export default connect(
  (state) => ({
    profile: state.system.profile,
  }),
  {}
)(App);
