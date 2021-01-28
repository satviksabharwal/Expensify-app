import React from "react";
import loadingLogo from "../images/loader.gif";
import "../styles/component/loader.css";

const LoadingPage = () => (
  <div className="loader">
    <img className="loader__image" src={loadingLogo} />
  </div>
);

export default LoadingPage;
