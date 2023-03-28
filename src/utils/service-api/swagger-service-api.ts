import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
import { GET_SWAGGER_SERVICES_URL } from "../constants/swaggerServiceConstants";
import RestController, { tokenHeader } from "./base-rest";

const token = tokenHeader();

export const getSwaggerServices = (): Promise<BaseFetch> => {
  return RestController.getRestController(GET_SWAGGER_SERVICES_URL, token);
};
