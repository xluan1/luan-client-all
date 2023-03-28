import React, { ChangeEvent, FC, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import FormInput from "../../../../../../../components/form/form-input/FormInput";
import InputFile from "../../../../../../../components/input/input-file/InputFile";
import { ClientDetail } from "../../../../../../../utils/types/clientType";

type PropTypes = {
  result: ClientDetail;
};

const ContentClientInfoTab: FC<PropTypes> = ({ result }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  const [isUpdate, setIsUpdate] = useState<boolean>(true);

  return (
    <Form>
      <Row className="card-content">
        <Col className="col" md={7}>
          <FormInput
            className="row"
            label="Tên dịch vụ"
            name="name"
            value={result.name}
            handleChange={handleChange}
            disabled={isUpdate}
          />
          <FormInput
            className="row"
            label="Người đứng đầu"
            name="leaderName"
            value={result.leaderName}
            handleChange={handleChange}
            disabled={isUpdate}
          />
          <FormInput
            className="row"
            label="SĐT"
            placeholder="Số điện thoại"
            name="leaderPhone"
            value={result.leaderPhone}
            handleChange={handleChange}
            disabled={isUpdate}
          />
          <FormInput
            className="row"
            label="Email"
            name="email"
            value={result.clientEmail}
            handleChange={handleChange}
            disabled={isUpdate}
          />
          <FormInput
            className="row"
            label="Link"
            name="url"
            value={result.url}
            handleChange={handleChange}
            disabled={isUpdate}
          />
          <FormInput
            className="row"
            label="Loại dịch vụ"
            name="typeDesc"
            value={result.typeDesc}
            handleChange={handleChange}
            disabled={isUpdate}
          />
          <FormInput
            className="row"
            label="Đối tượng"
            name="userObject"
            value={result.userObject}
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
        <Col className="col" md={5}>
          <InputFile
            roundedCircle={false}
            name="logoUrl"
            currentImage={result.logoUrl}
            title="Thay đổi ảnh"
            disabled={isUpdate}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default ContentClientInfoTab;
