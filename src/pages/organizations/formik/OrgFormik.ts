import { FormikHelpers } from "formik";
import { WrapperResponse } from "service-sdk/lib/types/BaseType";
import { FileRequest } from "../../../utils/types/clientType";

interface Values {
  name?: string;
  description?: string;
  leaderName?: string;
  createdBy?: string;
  phoneNumber?: string;
  file?: FileRequest;
  address?: string;
  language?: string;
  country?: string;
  referUrl?: string;
  email?: string;
}

class ClientFormik {
  initValue: Values = {
    name: "",
    description: "",
    leaderName: "",
    createdBy: "",
    phoneNumber: "",
    file: undefined,
    address: "",
    country: "",
    email: "",
    language: "VN",
    referUrl: "",
  };

  handleSubmit = (actions: FormikHelpers<Values>, errors?: WrapperResponse) => {
    actions.setSubmitting(false);

    if (errors && typeof errors.data !== "string") {
      actions.setFieldError("name", errors.data?.name);
      actions.setFieldError("leaderName", errors.data?.leaderName);
      actions.setFieldError("phoneNumber", errors.data?.phoneNumber);
      actions.setFieldError("email", errors.data?.email);
      actions.setFieldError("file", errors.data?.file);
    }
    setTimeout(() => {
      actions.setErrors({});
    }, 5000);
  };
}

export default new ClientFormik();
