import React, { ChangeEvent, FC, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormInput from "../../../../../../components/form/form-input/FormInput";
import InputFile from "../../../../../../components/input/input-file/InputFile";
import { OrganizationInfo } from "../../../../../../utils/types/orgType";

type PropTypes = {
  result: OrganizationInfo;
};

const ContentOrgInfoTab: FC<PropTypes> = ({ result }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  const [isUpdate, setIsUpdate] = useState<boolean>(true);

  return (
    <Form>
      <Row className="card-content">
        <Col className="col" md={7}>
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
            label="SĐT chính"
            placeholder="Số điện thoại"
            name="leaderPhone"
            value={result.phoneNumber}
            handleChange={handleChange}
            disabled={isUpdate}
          />
          <FormInput
            className="row"
            label="SĐT dự phòng"
            placeholder="Số điện thoại dự phòng"
            name="leaderPhone"
            value={result.phoneNumber2}
            handleChange={handleChange}
            disabled={isUpdate}
          />
          <FormInput
            className="row"
            label="Quốc gia"
            placeholder="Quốc gia"
            name="country"
            value={result.country}
            handleChange={handleChange}
            disabled={isUpdate}
          />
          <FormInput
            className="row"
            label="Email"
            placeholder="Email"
            name="email"
            value={result.email}
            handleChange={handleChange}
            disabled={isUpdate}
          />
          <FormInput
            className="row"
            label="Thông tin tổ chức"
            placeholder="Đường dẫn tham khảo thông tin tổ chức"
            name="referUrl"
            value={result.referUrl}
            handleChange={handleChange}
            disabled={isUpdate}
          />
        </Col>
        <Col className="col" md={5}>
          <InputFile
            roundedCircle={false}
            name="logoUrl"
            currentImage={result.orgLogoId}
            title="Thay đổi ảnh"
            disabled={isUpdate}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default ContentOrgInfoTab;
