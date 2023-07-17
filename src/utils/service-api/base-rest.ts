import axios from "axios";
import Cookies from "js-cookie";
import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
import { WrapperResponse } from "service-sdk/lib/types/BaseType";
import RequestService from "service-sdk/lib/utils/index";
import Swal from "sweetalert2";
import { clientId } from "../constants/baseConstants";
import { HeadersType } from "service-sdk/lib/utils/index";

export const tokenHeader = (): string | undefined => {
  const cookieName: string = clientId + "_Token-CODE";
  return Cookies.get(cookieName);
};

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const processException = (response?: WrapperResponse) => {
  if (typeof response?.data === "string") {
    Toast.fire({ icon: "error", title: response?.data });
  } else {
    Toast.fire({ icon: "error", title: response?.message });
    // Toast.fire({ icon: "error", title: JSON.stringify(response?.data) });
  }
};

class RestController {
  getRestController = async (
    path: string,
    csrftoken?: string
  ): Promise<BaseFetch> => {
    const fetch = new BaseFetch();
    try {
      const response: any = await RequestService.get(path, clientId, csrftoken);

      fetch.data = response?.data;
      Toast.fire({ icon: "success", title: fetch.data.message });
    } catch (error) {
      console.log(error);

      if (axios.isAxiosError(error)) {
        const err = error.response?.data;
        fetch.errors = err as WrapperResponse;
        processException(fetch.errors);
      }
    }
    return fetch;
  };

  postRestController = async (
    path: string,
    body: any,
    csrftoken?: string,
    headers?: HeadersType[]
  ): Promise<BaseFetch> => {
    const fetch = new BaseFetch();

    try {
      const response: any = await RequestService.post(
        path,
        body,
        clientId,
        csrftoken,
        headers
      );

      fetch.data = response?.data;
      Toast.fire({ icon: "success", title: fetch.data.message });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data;
        fetch.errors = err as WrapperResponse;
        processException(fetch.errors);
      }
    }
    return fetch;
  };

  putRestController = async (
    path: string,
    body: any,
    csrftoken?: string,
    headers?: HeadersType[]
  ): Promise<BaseFetch> => {
    const fetch = new BaseFetch();
    try {
      const response: any = await RequestService.put(
        path,
        body,
        clientId,
        csrftoken,
        headers
      );

      fetch.data = response.data;
      Toast.fire({ icon: "success", title: fetch.data.message });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data;
        fetch.errors = err as WrapperResponse;
        processException(fetch.errors);
      }
    }
    return fetch;
  };

  deleteRestController = async (
    path: string,
    csrftoken?: string
  ): Promise<BaseFetch> => {
    const fetch = new BaseFetch();
    try {
      const response: any = await RequestService.delete(
        path,
        clientId,
        csrftoken
      );

      fetch.data = response?.data;
      Toast.fire({ icon: "success", title: fetch.data.message });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data;
        fetch.errors = err as WrapperResponse;
        processException(fetch.errors);
      }
    }
    return fetch;
  };
}

export default new RestController();
