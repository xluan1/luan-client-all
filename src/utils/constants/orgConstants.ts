import { BASE_URL } from "./baseConstants";

// url of org-service
const ORG_SERVICE_URL: string = BASE_URL + "/org-service/";
const ORG_URL: string = ORG_SERVICE_URL + "org/1.0.0/";
const ORG_SA_URL: string = ORG_SERVICE_URL + "sa/1.0.0/";

//org
export const GET_ORG_URL = ORG_URL + "get_organization/";
export const GET_ORG_INFO_URL = ORG_URL + "get_organization_info/";

//org superadmin
export const CREATE_ORG_URL = ORG_SA_URL + "create_new_organization/";
export const SEARCH_ORG_URL = ORG_SA_URL + "search_organization/";
export const SEARCH_ORG_CLient_URL = ORG_SA_URL + "search_organization_client/";
export const ADD_ORG_CLIENT_URL = ORG_SA_URL + "add_organization_client/";
export const GET_ALL_ORG_URL = ORG_SA_URL + "get_all_organization/";
