import { BaseFilter } from "service-sdk/lib/types/BaseType";
import { BaseEntity } from "./baseType";

export interface User extends BaseEntity {
  clientId?: string;
  orgId?: string;
  isSuperAdmin?: boolean;
  isOauth2?: boolean;
  userEntityClass?: string;
  authProvider?: string;
  isAllAccess?: boolean;
}

// ************************** REQUEST **************************
export interface UserLocalLoginRequest {
  username: string;
  password: string;
}

export interface LoginOTPRequest {
  otpCode: string;
}

export interface LoginPINRequest {
  pinCode: string;
}

export interface ResetOTPRequest {
  sessionId: string | undefined;
}

export interface UserFilter extends BaseFilter {
  isOauth2?: boolean;
  provider?: string;
}
