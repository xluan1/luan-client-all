import React from "react";
import LoginPIN from "xuanluan-component/lib/pages/login/LoginPIN";
import { BASE_URL, clientId } from "../utils/constants/baseConstants";

const LoginPINTL = () => {
  return (
    <LoginPIN
      domain={BASE_URL}
      className="f-login"
      clientId={clientId}
      toPage="/dashboard"
    />
  );
};

export default LoginPINTL;
