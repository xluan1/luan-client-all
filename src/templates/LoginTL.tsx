import React from "react";
import Login from "xuanluan-component/lib/pages/login/Login";
import { BASE_URL, clientId } from "../utils/constants/baseConstants";

const LoginTL = () => {
  return (
    <Login
      domain={BASE_URL}
      className="f-login"
      clientId={clientId}
      toPage="/dashboard"
    />
  );
};

export default LoginTL;
