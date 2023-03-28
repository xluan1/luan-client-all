import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
import { Toast } from "../service-api/base-rest";
import { sendEmailOfConfig } from "../service-api/client-service-api";
import {
  EmailConfig,
  EmailSender,
  EmailSenderConfig,
  NewClientRequest,
} from "../types/clientType";

class EmailUtils {
  checkServerOfMail = async (
    values: NewClientRequest,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    const emailSender: EmailSender = {
      messageBody: `Test server của email: ${values.usernameMail}`,
      subject: "Test Server",
      toEmail: values.usernameMail,
    };
    const emailConfig: EmailConfig = {
      hostMail: values.hostMail,
      isConnectMail: true,
      passwordMail: values.passwordMail,
      usernameMail: values.usernameMail,
      portMail: values.portMail,
      protocolMail: values.protocolMail,
    };

    const emailSenderConfig: EmailSenderConfig = {
      config: emailConfig,
      sender: emailSender,
    };

    await sendEmailOfConfig(emailSenderConfig).then((result: BaseFetch) => {
      result.errors &&
        Toast.fire({
          icon: "error",
          title: "Thông tin cấu hình của email không chính xác!",
        });
    });
    setSubmitting(false);
  };
}

export default new EmailUtils();
