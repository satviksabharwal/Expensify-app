import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import "../styles/component/box-style.css";
import "../styles/component/button.css";

export const LoginPage = ({ startLogin }) => (
  <div className="box-style">
    <div className="box-style__box">
      <h1 className="box-style__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <button className="button" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
