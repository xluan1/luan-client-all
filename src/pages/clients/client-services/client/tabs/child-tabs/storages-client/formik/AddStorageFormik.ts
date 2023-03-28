import { FormikHelpers } from "formik";
import { NewStorageSale } from "../../../../../../../../utils/types/clientType";

interface Values {
  type: string;
  byUser?: string;
  sales: NewStorageSale[];
}

class AddStorageFormik {
  initValue: Values = {
    byUser: "",
    type: "DATABASE",
    sales: [],
  };

  handleSubmit = (actions: FormikHelpers<Values>) => {
    actions.setSubmitting(false);
    actions.resetForm({ values: this.initValue });
  };
}

export default new AddStorageFormik();
