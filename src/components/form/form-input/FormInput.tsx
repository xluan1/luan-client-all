import React, { FC, ReactNode } from "react";
import { Col, Form } from "react-bootstrap";
import "./FormInput.css";

export type GridColumn = {
  mdLabel?: number;
  mdInput?: number;
  smLabel?: number;
  smInput?: number;
  xlLabel?: number;
  xlInput?: number;
  xsLabel?: number;
  xsInput?: number;
};

export const gridColDefault: GridColumn = {
  mdInput: 8,
  mdLabel: 4,
  smInput: 9,
  smLabel: 3,
  xsLabel: 12,
  xsInput: 12,
  xlLabel: 3,
  xlInput: 9,
};

type PropsType = {
  controlId?: string;
  className?: string;
  label?: string;
  icon?: ReactNode;
  name?: string;
  id?: string;
  value?: any;
  error?: string;
  placeholder?: string;
  type?: string;
  handleChange?: any;
  row?: number;
  disabled?: boolean;
  configForm?: GridColumn;
};

const FormInput: FC<PropsType> = ({
  controlId,
  className,
  label,
  icon,
  name,
  id,
  value = undefined,
  error,
  placeholder,
  type,
  handleChange,
  row,
  disabled,
  configForm = gridColDefault,
}) => {
  return (
    <Form.Group controlId={controlId} className={className}>
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
        <Form.Control
          type={type}
          placeholder={placeholder}
          isInvalid={!!error}
          name={name}
          value={value ? value : ""}
          id={id}
          onChange={handleChange}
          as={row ? "textarea" : undefined}
          rows={row}
          disabled={disabled}
        />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};

export default FormInput;
