import { FormikHelpers } from "formik";
import { WrapperResponse } from "service-sdk/lib/types/BaseType";
import { FileRequest } from "../../../../../utils/types/clientType";

interface Values {
  description?: string;
  leaderName?: string;
  createdBy?: string;
  clientName?: string;
  clientEmail?: string;
  clientTypeId?: string;
  phoneNumber?: string;
  object?: string;
  file?: FileRequest;
  clientPhone?: string;
  hostMail?: string;
  usernameMail?: string;
  passwordMail?: string;
  portMail?: number;
  protocolMail?: string;
}

class ClientFormik {
  initValue: Values = {
    description: "",
    leaderName: "",
    createdBy: "",
    clientName: "",
    clientEmail: "",
    clientTypeId: "",
    phoneNumber: "",
    object: "",
    file: undefined,
    clientPhone: "",
    hostMail: "",
    usernameMail: "",
    passwordMail: "",
    portMail: 0,
    protocolMail: "",
  };

  handleSubmit = (
    actions: FormikHelpers<Values>,
    errors: WrapperResponse | undefined
  ) => {
    actions.setSubmitting(false);

    actions.setFieldError("leaderName", errors?.data?.leaderName);
    actions.setFieldError("clientName", errors?.data?.clientName);
    actions.setFieldError("clientEmail", errors?.data?.clientEmail);
    actions.setFieldError("clientTypeId", errors?.data?.clientTypeId);
    actions.setFieldError("phoneNumber", errors?.data?.phoneNumber);
    actions.setFieldError("clientPhone", errors?.data?.clientPhone);
    actions.setFieldError("object", errors?.data?.object);
    actions.setFieldError("file", errors?.data?.file);

    setTimeout(() => {
      actions.setErrors({});
    }, 5000);
  };
}

export default new ClientFormik();
