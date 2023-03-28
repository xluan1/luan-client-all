import { Formik } from "formik";
import React, { FC, ReactElement } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import FormInput from "../../../components/form/form-input/FormInput";
import InputFile from "../../../components/input/input-file/InputFile";
import FileHandler from "../../../utils/file/FileHandler";
import { createOrganization } from "../../../utils/service-api/org-service-api";
import { ShowModal } from "../../../utils/types/baseType";
import OrgFormik from "../formik/OrgFormik";

const OrgModal: FC<ShowModal> = ({ handleClose, isOpened }): ReactElement => {
  const { currentFile, file, handleFileSelect } = FileHandler();

  return (
    <>
      <Modal show={isOpened} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm tổ chức mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={OrgFormik.initValue}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true);
              values.file = currentFile.current;
              const fetch = await createOrganization(values);

              OrgFormik.handleSubmit(actions, fetch.errors);
            }}
          >
            {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Col md={5}>
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
                      label="Tên tổ chức"
                      placeholder="Nhập tên tổ chức"
                      name="name"
                      value={values.name}
                      handleChange={handleChange}
                      error={errors.name}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Email"
                      placeholder="Nhập thông tin email"
                      type="email"
                      name="email"
                      value={values.email}
                      handleChange={handleChange}
                      error={errors.email}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Sđt tổ chức"
                      placeholder="Số điện thoại của tổ chức"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      handleChange={handleChange}
                      error={errors.phoneNumber}
                    />
                  </Col>
                  <Col md={5}>
                    <FormInput
                      className="row mb-3"
                      label="Địa chỉ"
                      placeholder="Địa chỉ của tổ chức"
                      name="address"
                      value={values.address}
                      handleChange={handleChange}
                      error={errors.address}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Link"
                      placeholder="Link tham khảo"
                      name="referUrl"
                      value={values.referUrl}
                      handleChange={handleChange}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Mô tả"
                      placeholder="Mô tả..."
                      name="description"
                      value={values.description}
                      handleChange={handleChange}
                      row={3}
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

export default OrgModal;
