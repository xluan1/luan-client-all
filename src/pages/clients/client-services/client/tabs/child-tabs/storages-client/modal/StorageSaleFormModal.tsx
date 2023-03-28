import React, { Dispatch, FC } from "react";
import { Col, Row } from "react-bootstrap";
import FormInput from "../../../../../../../../components/form/form-input/FormInput";
import FormSelectCustom from "../../../../../../../../components/form/form-select/FormSelect";
import IconButton from "../../../../../../../../components/icon-button/IconButton";
import {
  CurrencyWorld,
  StorageUnit,
} from "../../../../../../../../utils/enums/client-service";
import { NewStorageSale } from "../../../../../../../../utils/types/clientType";

type PropsType = {
  values: NewStorageSale[];
  count: number;
  setCount: Dispatch<React.SetStateAction<number>>;
  handleChange: any;
};

const StorageSaleFormModal: FC<PropsType> = ({
  values = [],
  count,
  setCount,
  handleChange,
}) => {
  const removeValue = (index: number) => {
    values.splice(
      values.findIndex((value: NewStorageSale, key: number) => index === key)
    );
    setCount(--count);
  };

  return (
    <>
      {values &&
        values.map((sale: NewStorageSale, key: number) => (
          <Row className="text-center" key={key}>
            <Col md={2}>
              <FormInput
                className="row"
                label="Tên"
                name={`sales[${key}].name`}
                value={sale.name}
                handleChange={handleChange}
                configForm={{ mdLabel: 2 }}
              />
            </Col>
            <Col md={2}>
              <FormInput
                className="row"
                label="Dung lượng"
                name={`sales[${key}].capacity`}
                value={sale.capacity}
                handleChange={handleChange}
                configForm={{ mdLabel: 6 }}
              />
            </Col>
            <Col md={2}>
              <FormSelectCustom
                className="row mb-1"
                label="Đơn vị"
                name={`sales[${key}].unit`}
                handleChange={handleChange}
                options={StorageUnit}
                optionValue={"name"}
                optionLabel={"name"}
                configForm={{ mdLabel: 5 }}
              />
            </Col>
            <Col md={3}>
              <FormSelectCustom
                className="row mb-1"
                label="Tiền tệ"
                name={`sales[${key}].currency`}
                handleChange={handleChange}
                options={CurrencyWorld}
                optionValue={"name"}
                optionLabel={"code"}
                configForm={{ mdLabel: 5 }}
              />
            </Col>
            <Col md={2}>
              <FormInput
                className="row"
                label="Đường dẫn"
                name={`sales[${key}].path`}
                value={sale.path}
                handleChange={handleChange}
                configForm={{ mdLabel: 6 }}
              />
            </Col>
            <Col md={1}>
              <IconButton
                className="btn-custom"
                tittle="Xóa"
                type="button"
                onClick={() => removeValue(key)}
              />
            </Col>
          </Row>
        ))}
    </>
  );
};

export default StorageSaleFormModal;
