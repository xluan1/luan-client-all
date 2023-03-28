import {
  LOGIN_URL,
  CHECK_OTP_URL,
  CHECK_PIN_URL,
  RESET_OTP_URL,
  SEARCH_USER_URL,
  CURRENT_USER_TOKEN_URL,
  LOGOUT_URL,
} from "../constants/urlConstants";
import {
  UserLocalLoginRequest,
  LoginOTPRequest,
  LoginPINRequest,
  ResetOTPRequest,
  UserFilter,
} from "../types/authType";
import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
import RestController, { tokenHeader } from "./base-rest";

const token = tokenHeader();

export const login = (request: UserLocalLoginRequest): Promise<BaseFetch> => {
  return RestController.postRestController(LOGIN_URL, request);
};

export const loginOTP = (
  sessionId: string | undefined,
  request: LoginOTPRequest
): Promise<BaseFetch> => {
  return RestController.postRestController(CHECK_OTP_URL + sessionId, request);
};

export const loginPIN = (
  sessionId: string | undefined,
  request: LoginPINRequest
): Promise<BaseFetch> => {
  return RestController.postRestController(CHECK_PIN_URL + sessionId, request);
};

export const getCurrentUserToken = (sessiondId: string): Promise<BaseFetch> => {
  return RestController.getRestController(CURRENT_USER_TOKEN_URL + sessiondId);
};

export const resetOTP = (request: ResetOTPRequest): Promise<BaseFetch> => {
  return RestController.postRestController(RESET_OTP_URL, request);
};

export const searchUser = (
  clientId: string,
  orgId: string,
  request: UserFilter
): Promise<BaseFetch> => {
  return RestController.postRestController(
    SEARCH_USER_URL + clientId + "/" + orgId,
    request,
    token
  );
};

export const logout = (sessionId: string) => {
  return RestController.deleteRestController(LOGOUT_URL + sessionId);
};
