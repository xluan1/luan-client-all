import { SEARCH_USER_URL } from "../constants/urlConstants";
import { UserFilter } from "../types/authType";
import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
import RestController, { tokenHeader } from "./base-rest";
import axios from "axios";
import { BASE_URL, clientId } from "../constants/baseConstants";

const token = tokenHeader();

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
export const getToken = () => {
  axios
    .get(
      BASE_URL +
        "/auth-service/auth/1.0.0/get_current_user_token/FINAL_all_devsuperadmin_2d6092a4-ba13-4697-a811-bd0cf9c3fb60",
      { headers: { clientId: clientId } }
    )
    .then((data) => console.log(data));
};
