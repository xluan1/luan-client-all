import { ChangeEvent } from "react";
import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
import { uploadFile } from "../service-api/client-service-api";

class FileUtils {
  uploadFileSelect = (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<BaseFetch> => {
    const formData = new FormData();
    if (event.target.files) {
      formData.append("file", event.target.files[0]);
    }
    return uploadFile(formData);
  };

  getFileBase64 = (base64?: string, type?: string): string => {
    return base64 && type ? "data:" + type + ";base64, " + base64 : "";
  };
}
export default new FileUtils();
