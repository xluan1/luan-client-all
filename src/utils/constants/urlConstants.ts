import { BASE_URL } from "./baseConstants";

const AUTH_SERVICE_URL: string = BASE_URL + "/auth-service/auth/1.0.0/";
const AUTH_ADMIN_URL: string = BASE_URL + "/auth-service/admin/1.0.0/";

// not login
export const LOGIN_URL: string = AUTH_SERVICE_URL + "login";
export const RESET_OTP_URL: string = AUTH_SERVICE_URL + "reset-otp/";
export const CHECK_OTP_URL: string = AUTH_SERVICE_URL + "check-otp/";
export const CHECK_PIN_URL: string = AUTH_SERVICE_URL + "check-pin/";
export const CURRENT_USER_TOKEN_URL: string =
  AUTH_SERVICE_URL + "get_current_user_token/";
export const LOGOUT_URL: string = AUTH_SERVICE_URL + "logout/";
// admin
export const SEARCH_USER_URL: string = AUTH_ADMIN_URL + "search_user/";
