import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
import { BaseFilter } from "service-sdk/lib/types/BaseType";
import {
  ADD_ORG_CLIENT_URL,
  CREATE_ORG_URL,
  GET_ALL_ORG_URL,
  GET_ORG_INFO_URL,
  GET_ORG_URL,
  SEARCH_ORG_CLient_URL,
  SEARCH_ORG_URL,
} from "../constants/orgConstants";
import { NewOrgClient, NewOrganization } from "../types/orgType";
import RestController, { tokenHeader } from "./base-rest";

const token = tokenHeader();

export const createOrganization = (
  request: NewOrganization
): Promise<BaseFetch> => {
  return RestController.postRestController(CREATE_ORG_URL, request, token);
};

export const searchOrganization = (
  orgId: string,
  request: BaseFilter
): Promise<BaseFetch> => {
  return RestController.postRestController(
    SEARCH_ORG_URL + orgId,
    request,
    token
  );
};

export const searchOrganizationClient = (
  clientId: string,
  orgId: string,
  request: BaseFilter
): Promise<BaseFetch> => {
  return RestController.postRestController(
    SEARCH_ORG_CLient_URL + clientId + "/" + orgId,
    request,
    token
  );
};

export const addOrganizationClient = (
  clientId: string,
  request: NewOrgClient
): Promise<BaseFetch> => {
  return RestController.postRestController(
    ADD_ORG_CLIENT_URL + clientId,
    request,
    token
  );
};

export const getAllOrganization = (orgId: string): Promise<BaseFetch> => {
  return RestController.getRestController(GET_ALL_ORG_URL + orgId, token);
};

export const getOrganization = (orgId: string): Promise<BaseFetch> => {
  return RestController.getRestController(GET_ORG_URL + orgId);
};

export const getOrganizationInfo = (orgId: string): Promise<BaseFetch> => {
  return RestController.getRestController(GET_ORG_INFO_URL + orgId);
};
