import { Formik } from "formik";
import React, { FC, useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import FormSelectCustom from "../../../../../../../../components/form/form-select/FormSelect";
import IconButton from "../../../../../../../../components/icon-button/IconButton";
import { selectUsername } from "xuanluan-component/lib/redux/auth/auth-selectors";
import { useAppSelector } from "xuanluan-component/lib/redux/store";
import { StorageProviderType } from "../../../../../../../../utils/enums/client-service";
import { addClientStorage } from "../../../../../../../../utils/service-api/client-service-api";
import { ShowModal } from "../../../../../../../../utils/types/baseType";
import { NewStorageSale } from "../../../../../../../../utils/types/clientType";
import { useContextClientId } from "../../../../ClientDetail";
import AddStorageFormik from "../formik/AddStorageFormik";
import StorageSaleFormModal from "./StorageSaleFormModal";

const AddStorageModal: FC<ShowModal> = ({ isOpened, handleClose }) => {
  const outletContext = useContextClientId();
  const [countSale, setCountSale] = useState<number>(0);
  const addToList = (values: NewStorageSale[]) => {
    setCountSale(countSale + 1);
    const storageSale: NewStorageSale = {
      name: "",
      capacity: 0,
      unit: "MB",
      path: "",
      currency: "VIET_NAM",
    };
    values.push(storageSale);
  };

  const username = useAppSelector(selectUsername);

  useEffect(() => {}, [countSale]);
  return (
    <Modal show={isOpened} onHide={handleClose} fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>Thêm Dịch Vụ Lưu Trữ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={AddStorageFormik.initValue}
          onSubmit={async (values, actions) => {
            if (outletContext.clientId) {
              actions.setSubmitting(true);
              await addClientStorage(outletContext.clientId, values);
              values.byUser = username;

              AddStorageFormik.handleSubmit(actions);
            }
          }}
        >
          {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="text-center">
                <Col>
                  <FormSelectCustom
                    className="row mb-1"
                    label="Loại lưu trữ"
                    name="type"
                    handleChange={handleChange}
                    options={StorageProviderType}
                    optionValue={"name"}
                    optionLabel={"label"}
                    error={errors.type}
                    configForm={{ mdLabel: 5, mdInput: 3 }}
                  />
                  <Form.Group className={"row mb-1"}>
                    <Col className="col-form-label text-center">
                      <Form.Label column>
                        <h5>Kinh Doanh Lưu Trữ</h5>
                      </Form.Label>
                      <IconButton
                        className="btn-custom ms-3 me-3"
                        tittle="Thêm"
                        type="button"
                        onClick={() => addToList(values.sales)}
                      />
                    </Col>

                    <Row>
                      <StorageSaleFormModal
                        handleChange={handleChange}
                        values={values.sales}
                        count={countSale}
                        setCount={setCountSale}
                      />
                    </Row>
                  </Form.Group>
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
  );
};

export default AddStorageModal;
