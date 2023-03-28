import React, { ChangeEvent, FC, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormInput from "../../../../../../components/form/form-input/FormInput";
import { Organization } from "../../../../../../utils/types/orgType";

type PropTypes = {
  result: Organization;
};

const ContentOrgTab: FC<PropTypes> = ({ result }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  const [isUpdate, setIsUpdate] = useState<boolean>(true);
  return (
    <Form>
      <Row className="card-content">
        <Col className="col" md={12}>
          <FormInput
            className="row"
            label="Tên tổ chức"
            name="name"
            value={result.name}
            handleChange={handleChange}
            disabled={isUpdate}
          />
          <FormInput
            className="row"
            label="Mô tả"
            name="description"
            value={result.description}
            handleChange={handleChange}
            row={3}
            disabled={isUpdate}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default ContentOrgTab;
