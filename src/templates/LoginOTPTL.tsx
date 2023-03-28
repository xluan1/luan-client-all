import React from "react";
import LoginOTP from "xuanluan-component/lib/pages/login/LoginOTP";
import { BASE_URL, clientId } from "../utils/constants/baseConstants";

const LoginOTPTL = () => {
  return (
    <LoginOTP
      domain={BASE_URL}
      className="f-login"
      clientId={clientId}
      toPage="/dashboard"
    />
  );
};

export default LoginOTPTL;
