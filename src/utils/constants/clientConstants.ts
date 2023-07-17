import { BASE_URL } from "./baseConstants";

// url of client-service
const CLIENT_SERVICE_URL: string = BASE_URL + "/client-service/";
const CLIENT_URL: string = CLIENT_SERVICE_URL + "client/1.0.0/";
const CLIENT_SA_URL: string = CLIENT_SERVICE_URL + "sa/1.0.0/";
const CLIENT_DEV_URL: string = CLIENT_SERVICE_URL + "dev/1.0.0/";

//client
export const GET_CLIENT_MENU_URL = CLIENT_URL + "client_menu/";
export const GET_CLIENT_MENU_TREE_URL = CLIENT_URL + "client_menu_tree/";
export const GET_STORAGE_DETAIL_URL = CLIENT_URL + "storage_detail/";
export const SEARCH_STORAGE_URL = CLIENT_URL + "search_storage/";
export const GET_CLIENT_TYPES_URL = CLIENT_URL + "get_client_types";
export const GET_CLIENT_TYPE_URL = CLIENT_URL + "get_client_type/";
export const GET_CLIENT_INFO_URL = CLIENT_URL + "get_client_info/";
export const UPLOAD_FILE_URL = CLIENT_URL + "upload_file";
export const SEND_EMAIL_CLIENT_URL = CLIENT_URL + "send_email_from_client";
export const SEND_EMAIL_CONFIG_URL = CLIENT_URL + "send_email_from_config";
export const GET_BUSINESS_CLient_URL = CLIENT_URL + "get_all_business_client";
//client superadmin
export const CREATE_CLIENT_URL = CLIENT_SA_URL + "create_client";
export const SEARCH_CLIENT_URL = CLIENT_SA_URL + "search_client/";
//client developer
export const UPDATE_CLIENT_MENU = CLIENT_DEV_URL + "update_client_menu/";
export const ADD_CLIENT_STORAGE_URL = CLIENT_DEV_URL + "add_client_storage/";
export const ADD_CLIENT_MENU_URL = CLIENT_DEV_URL + "add_client_menu/";
