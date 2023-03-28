import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
import {
  ClientStorageFilter,
  NewClientRequest,
  NewClientStorage,
} from "../types/clientType";
import { BaseFilter } from "service-sdk/lib/types/BaseType";
import {
  CREATE_CLIENT_URL,
  SEARCH_CLIENT_URL,
  UPLOAD_FILE_URL,
  GET_CLIENT_TYPES_URL,
  SEND_EMAIL_CLIENT_URL,
  SEND_EMAIL_CONFIG_URL,
  GET_BUSINESS_CLient_URL,
  CLIENT_DETAIL_DEV_URL,
  SEARCH_STORAGE_URL,
  ADD_CLIENT_STORAGE_URL,
  GET_STORAGE_DETAIL_URL,
} from "../constants/clientConstants";
import RestController, { tokenHeader } from "./base-rest";
import { EmailSender, EmailSenderConfig } from "../types/clientType";

const token = tokenHeader();

// superadmin
export const createClient = (request: NewClientRequest): Promise<BaseFetch> => {
  return RestController.postRestController(CREATE_CLIENT_URL, request, token);
};

export const searchClient = (
  clientId: string,
  filter: BaseFilter
): Promise<BaseFetch> => {
  return RestController.postRestController(
    SEARCH_CLIENT_URL + clientId,
    filter,
    token
  );
};

//developer
export const getClientDetailDev = (clientId: string): Promise<BaseFetch> => {
  return RestController.getRestController(
    CLIENT_DETAIL_DEV_URL + clientId,
    token
  );
};
export const addClientStorage = (
  clientId: string,
  request: NewClientStorage
): Promise<BaseFetch> => {
  return RestController.postRestController(
    ADD_CLIENT_STORAGE_URL + clientId,
    request,
    token
  );
};

//client
export const getStorageDetail = (clientId: string, cStorageId: string) => {
  return RestController.getRestController(
    GET_STORAGE_DETAIL_URL + clientId + "/" + cStorageId
  );
};

export const searchStorage = (
  clientId: string,
  request: ClientStorageFilter
) => {
  return RestController.postRestController(
    SEARCH_STORAGE_URL + clientId,
    request
  );
};

export const uploadFile = (formData: FormData): Promise<BaseFetch> => {
  return RestController.postRestController(UPLOAD_FILE_URL, formData);
};

export const getClientTypes = (): Promise<BaseFetch> => {
  return RestController.getRestController(GET_CLIENT_TYPES_URL);
};

export const sendEmailFromClient = (
  request: EmailSender
): Promise<BaseFetch> => {
  return RestController.postRestController(SEND_EMAIL_CLIENT_URL, request);
};

export const sendEmailOfConfig = (
  request: EmailSenderConfig
): Promise<BaseFetch> => {
  return RestController.postRestController(SEND_EMAIL_CONFIG_URL, request);
};

export const getAllBusinessClient = (): Promise<BaseFetch> => {
  return RestController.getRestController(GET_BUSINESS_CLient_URL);
};
