import { Formik } from "formik";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import FormInput from "../../../../../components/form/form-input/FormInput";
import IconButton from "../../../../../components/icon-button/IconButton";
import {
  createClient,
  getClientTypes,
} from "../../../../../utils/service-api/client-service-api";
import ClientFormik from "../formik/ClientFormik";
import FormSelect from "../../../../../components/form/form-select/FormSelect";
import { UserObjectEnum } from "../../../../../utils/enums/client-service";
import FileHandler from "../../../../../utils/file/FileHandler";
import InputFile from "../../../../../components/input/input-file/InputFile";
import { ClientType } from "../../../../../utils/types/clientType";
import EmailUtils from "../../../../../utils/email/EmailUtils";
import { ShowModal } from "../../../../../utils/types/baseType";

const ClientModal: FC<ShowModal> = ({
  handleClose,
  isOpened,
}): ReactElement => {
  const [types, setTypes] = useState<[ClientType]>();
  const { currentFile, file, handleFileSelect } = FileHandler();

  useEffect(() => {
    getClientTypes().then((data) => setTypes(data.data.data));
  }, []);

  return (
    <>
      <Modal show={isOpened} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo dịch vụ mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={ClientFormik.initValue}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true);
              values.file = currentFile.current;
              const fetch = await createClient(values);

              ClientFormik.handleSubmit(actions, fetch.errors);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              errors,
              isSubmitting,
              setSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Col md={4}>
                    <FormInput
                      className="row mb-3"
                      label="Lãnh đạo"
                      placeholder="Nhập tên người lãnh đạo"
                      name="leaderName"
                      value={values.leaderName}
                      handleChange={handleChange}
                      error={errors.leaderName}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Tên dịch vụ"
                      placeholder="Nhập tên dịch vụ"
                      name="clientName"
                      value={values.clientName}
                      handleChange={handleChange}
                      error={errors.clientName}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Email"
                      placeholder="Nhập thông tin email"
                      type="email"
                      name="clientEmail"
                      value={values.clientEmail}
                      handleChange={handleChange}
                      error={errors.clientEmail}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Sđt Leader"
                      placeholder="Số điện thoại của người đứng đầu"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      handleChange={handleChange}
                      error={errors.phoneNumber}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Sđt Dịch vụ"
                      placeholder="Số điện thoại của dịch vụ"
                      name="clientPhone"
                      value={values.clientPhone}
                      handleChange={handleChange}
                      error={errors.clientPhone}
                    />
                    <FormSelect
                      className="row mb-3"
                      label="Loại dịch vụ"
                      placeholder="Chọn loại dịch vụ"
                      name="clientTypeId"
                      options={types}
                      optionLabel="description"
                      optionValue="clientTypeId"
                      handleChange={handleChange}
                      error={errors.clientTypeId}
                      configForm={{ mdLabel: 3 }}
                    />
                    <FormSelect
                      className="row mb-3"
                      label="Đối tượng"
                      placeholder="Chọn đối tượng có thể sử dụng"
                      name="object"
                      options={UserObjectEnum}
                      optionLabel="label"
                      optionValue="name"
                      handleChange={handleChange}
                      error={errors.object}
                      configForm={{ mdLabel: 3 }}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Mô tả"
                      placeholder="Mô tả..."
                      name="description"
                      value={values.description}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Label className="col-form-label">
                      <h5>Cấu hình server Email</h5>
                    </Form.Label>
                    <FormInput
                      className="row mb-3"
                      label="Host"
                      placeholder="Host của email"
                      name="hostMail"
                      value={values.hostMail}
                      handleChange={handleChange}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Protocol"
                      placeholder="Protocol của email"
                      name="protocolMail"
                      value={values.protocolMail}
                      handleChange={handleChange}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Port"
                      placeholder="Port của email"
                      name="portMail"
                      value={values.portMail}
                      handleChange={handleChange}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Username"
                      placeholder="Username của email"
                      name="usernameMail"
                      value={values.usernameMail}
                      handleChange={handleChange}
                    />
                    <FormInput
                      className="row mb-3"
                      type="password"
                      label="Password"
                      placeholder="Password của email"
                      name="passwordMail"
                      value={values.passwordMail}
                      handleChange={handleChange}
                    />
                    <IconButton
                      tittle="Kiểm tra server"
                      type="button"
                      onClick={() => {
                        setSubmitting(true);
                        EmailUtils.checkServerOfMail(values, setSubmitting);
                      }}
                      disabled={isSubmitting}
                    />
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img src={file} />
                    </Card>
                    <InputFile
                      handleChange={handleFileSelect}
                      error={errors.file}
                      disabled={isSubmitting}
                    />
                  </Col>
                </Row>
                <Button
                  className="me-2"
                  variant="secondary"
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                  Đóng
                </Button>
                <Button type="submit" variant="success" disabled={isSubmitting}>
                  Thêm
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ClientModal;
