import React, { ChangeEventHandler, FC, ReactNode } from "react";
import { Col, Form } from "react-bootstrap";
import { gridColDefault, GridColumn } from "../form-input/FormInput";

type PropTypes = {
  className?: string;
  result?: any[];
  name?: string;
  label?: string;
  icon?: ReactNode;
  valueField?: string;
  labelField?: string;
  handleChange?: ChangeEventHandler;
  inline?: boolean;
  configForm?: GridColumn;
};

const FormCheckBox: FC<PropTypes> = ({
  className,
  result,
  name,
  label,
  icon,
  valueField = "",
  labelField = "",
  inline,
  handleChange,
  configForm = gridColDefault,
}) => {
  return (
    <div className={className}>
      <Col
        md={configForm.mdLabel}
        sm={configForm.smLabel}
        xl={configForm.xlLabel}
        xs={configForm.xsLabel}
      >
        <Form.Label>
          {icon}
          <h5>{label}</h5>
        </Form.Label>
      </Col>
      <Col
        md={configForm.mdInput}
        sm={configForm.smInput}
        xl={configForm.xlInput}
        xs={configForm.xsInput}
      >
        {result &&
          result.map((data, index) => (
            <Form.Check
              key={index}
              name={name}
              label={data[labelField]}
              value={data[valueField]}
              onChange={handleChange}
              inline={inline}
            />
          ))}
      </Col>
    </div>
  );
};

export default FormCheckBox;
