import { BaseFilter } from "service-sdk/lib/types/BaseType";
import { BaseEntity, BaseInfo, FileStorage } from "./baseType";

export interface ClientType extends BaseInfo {
  clientTypeId: string;
}

export interface Client extends BaseEntity, BaseInfo {
  clientTypeId: string;
  clientId?: string;
  leaderPhone?: string;
  leaderName?: string;
  url?: string;
  clientEmail: string;
  fileStorage?: FileStorage;
}

export interface ClientMenuDTO extends BaseInfo {
  id: string;
  path?: string;
  component?: string;
  icon?: string;
  description?: string;
  subMenus?: ClientMenuDTO[];
}

export interface ClientStorage extends BaseEntity, BaseInfo {
  type?: number;
  url?: string;
  unit?: string;
  capacity?: number;
}

// ************************** REQUEST **************************
export interface ClientStorageFilter extends BaseFilter {
  unit?: "TB" | "GB" | "MB";
  capacityFrom?: number;
  capacityTo?: number;
}

export interface ClientMenuUpdate {
  byUser?: string;
  dto: ClientMenuDTO;
}

export interface NewClientMenu {
  byUser?: string;
  menus: ClientMenuDTO[];
}

export interface NewStorageSale {
  name: string;
  path?: string;
  unit?: string;
  capacity?: number;
  currency?: string;
}
export interface NewClientStorage {
  type: string;
  byUser?: string;
  sales: NewStorageSale[];
}

export interface EmailSender {
  toEmail?: string;
  messageBody?: string;
  subject?: string;
}

export interface EmailConfig {
  isConnectMail?: boolean;
  hostMail?: string;
  usernameMail?: string;
  passwordMail?: string;
  portMail?: number;
  protocolMail?: string;
}

export interface EmailSenderConfig {
  config: EmailConfig;
  sender: EmailSender;
}

export interface FileRequest {
  name?: string;
  originalFile?: string;
  type?: string;
  long?: number;
  data?: string;
}

export interface NewClientRequest {
  providerType?: string;
  description?: string;
  leaderName?: string;
  createdBy?: string;
  clientName?: string;
  clientEmail?: string;
  clientTypeId?: string;
  object?: string;
  clientPhone?: string;
  hostMail?: string;
  usernameMail?: string;
  passwordMail?: string;
  portMail?: number;
  protocolMail?: string;
}
