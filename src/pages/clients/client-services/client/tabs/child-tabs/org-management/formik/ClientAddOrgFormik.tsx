import { FormikHelpers } from "formik";
import { WrapperResponse } from "service-sdk/lib/types/BaseType";
import { StorageRegistrationRequest } from "../../../../../../../../utils/types/orgType";

interface Values {
  description?: string;
  orgId: string;
  name?: string;
  storageRequest?: StorageRegistrationRequest;
  byUser?: string;
}

class ClientAddOrgFormik {
  initValue: Values = {
    description: "",
    byUser: "",
    orgId: "",
    name: "",
    storageRequest: {
      isDefault: false,
    },
  };

  handleSubmit = (
    actions: FormikHelpers<Values>,
    errors: WrapperResponse | undefined
  ) => {
    actions.setSubmitting(false);

    if (errors) {
      actions.setFieldError("orgId", errors.data?.orgId);
      setTimeout(() => {
        actions.setErrors({});
      }, 5000);
    } else {
      actions.resetForm({ values: this.initValue });
    }
  };
}

export default new ClientAddOrgFormik();
