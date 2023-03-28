import { BaseEntity, BaseInfo } from "./baseType";
import { FileRequest } from "./clientType";

export interface Organization extends BaseEntity {
  orgId?: string;
  name?: string;
  description?: string;
  isCustomer?: boolean;
  isDefault?: boolean;
  language?: number;
}

export interface OrganizationInfo extends BaseEntity {
  orgId?: string;
  address?: string;
  phoneNumber?: string;
  phoneNumber2?: string;
  email?: string;
  referUrl?: string;
  country?: string;
  leaderName?: string;
  hashCode?: string;
  orgLogoId?: string;
}

export interface OrganizationClient extends BaseEntity, BaseInfo {
  clientId?: string;
  orgId?: string;
}

export interface ClientStorageSaleResponse {
  id?: string;
  price?: number;
  currencyWorld?: string;
  currencyCode?: string;
}

// ************************** REQUEST **************************
export interface StorageRegistrationRequest {
  byUser?: string;
  cStorageId?: string;
  cStorageSaleId?: string;
  cDiscountId?: string;
  isDefault?: boolean;
}
export interface NewOrgClient {
  orgId?: string;
  byUser?: string;
  description?: string;
  name?: string;
  storageRequest?: StorageRegistrationRequest;
}
export interface NewOrganization {
  name?: string;
  description?: string;
  createdBy?: string;
  address?: string;
  email?: string;
  referUrl?: string;
  language?: string;
  country?: string;
  file?: FileRequest;
}
