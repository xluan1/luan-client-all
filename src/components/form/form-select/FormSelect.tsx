import React, { FC, ReactNode } from "react";
import { Col, Form } from "react-bootstrap";
import { gridColDefault, GridColumn } from "../form-input/FormInput";

type PropsType = {
  className?: string;
  label?: string;
  icon?: ReactNode;
  name?: string;
  options?: any[];
  optionValue?: string;
  optionLabel?: string;
  error?: string;
  placeholder?: string;
  type?: string;
  handleChange?: any;
  configForm?: GridColumn;
  optionLabelSubs?: string[];
};

const FormSelectCustom: FC<PropsType> = ({
  className,
  label,
  icon,
  name,
  options,
  optionValue,
  optionLabel,
  error,
  placeholder,
  handleChange,
  configForm = gridColDefault,
  optionLabelSubs,
}) => {
  return (
    <Form.Group className={className}>
      <Col
        md={configForm.mdLabel}
        sm={configForm.smLabel}
        xl={configForm.xlLabel}
        xs={configForm.xsLabel}
        className="col-form-label"
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
        <Form.Select
          placeholder={placeholder}
          isInvalid={!!error}
          name={name}
          onChange={handleChange}
        >
          <option defaultChecked value={""}>
            Chọn Dữ Liệu
          </option>
          {options?.map((data, index) => (
            <option key={index} value={data[optionValue ? optionValue : ""]}>
              <>{data[optionLabel ? optionLabel : ""]}</>
              <>
                {optionLabelSubs?.map((sub) => {
                  return " " + data[sub];
                })}
              </>
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};

export default FormSelectCustom;
