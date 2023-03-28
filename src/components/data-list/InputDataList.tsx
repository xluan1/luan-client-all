import React, { ChangeEventHandler, FC, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

type PropsType = {
  className?: string;
  name?: string;
  value?: string;
  fieldName?: string;
  fieldValue?: any;
  label?: string;
  placeHolder?: string;
  error?: string;
  setFieldValue?: (field: string, value: any) => void;
  resultList?: any[];
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

const ItemList = (
  fieldName: string,
  fieldValue: string,
  setFieldValue?: (field: string, value: any) => void,
  resultList?: any,
  isShow?: boolean,
  setShow?: (show: boolean) => void
) => {
  if (!isShow) return [];
  return (
    resultList &&
    resultList
      .filter((data: any) => data[fieldName]?.includes(fieldValue))
      .map((data: any) => (
        <Button
          onClick={() => {
            setFieldValue && setFieldValue(fieldName, data[fieldName]);
            setShow && setShow(false);
          }}
          key={data.orgId}
        >
          {data[fieldName ? fieldName : ""]}
        </Button>
      ))
  );
};

const InputDataList: FC<PropsType> = ({
  className,
  name = "",
  label,
  handleChange,
  value = "",
  resultList,
  setFieldValue,
  fieldName = "name",
  fieldValue = "",
  disabled,
}) => {
  const [showList, setShowList] = useState(false);

  return (
    <Form.Group className={className}>
      <Col sm={3} className={"col-form-label"}>
        <Form.Label>
          <h5>{label}</h5>
        </Form.Label>
      </Col>
      <Col md={8} sm={9}>
        <Col md={8} sm={9}>
          <Form.Control
            name={name}
            type="search"
            value={value}
            onChange={handleChange}
            disabled={disabled}
            onFocus={() => setShowList && setShowList(true)}
            onBlur={() =>
              setTimeout(() => {
                setShowList && setShowList(false);
              }, 150)
            }
          />
        </Col>
        <div className="list">
          {ItemList(
            fieldName,
            value,
            setFieldValue,
            resultList,
            showList,
            setShowList
          )}
        </div>
      </Col>
    </Form.Group>
  );
};

export default InputDataList;
