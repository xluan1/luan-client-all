import Cookies from "js-cookie";
import React, { FC, ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { clientId } from "./constants/baseConstants";

export const isSuccessLogin = (): boolean => {
  const isLogined = Cookies.get(clientId + "_SSID-FINAL");
  const sessionId = Cookies.get(clientId + "_Token-CODE");
  return isLogined && sessionId ? true : false;
};

const PrivatedRoutes: FC = (): ReactElement => {
  const isAuth = isSuccessLogin();

  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivatedRoutes;
