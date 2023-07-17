import { Formik } from "formik";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import FormCheckBox from "../../../../../../../../components/form/checkbox/FormCheckBox";
import FormInput from "../../../../../../../../components/form/form-input/FormInput";
import FormSelectCustom from "../../../../../../../../components/form/form-select/FormSelect";
import {
  selectUsername,
  selectUserOrgId,
} from "xuanluan-component/lib/redux/auth/auth-selectors";
import { useAppSelector } from "xuanluan-component/lib/redux/store";
import SearchFilter from "xuanluan-component/lib/utils/search/SearchFilter";
import {
  getStorageDetail,
  searchStorage,
} from "../../../../../../../../utils/service-api/client-service-api";
import {
  addOrganizationClient,
  getAllOrganization,
} from "../../../../../../../../utils/service-api/org-service-api";
import {
  ResultList,
  ShowModal,
} from "../../../../../../../../utils/types/baseType";
import {
  ClientStorage,
  ClientStorageFilter,
} from "../../../../../../../../utils/types/clientType";
import {
  ClientStorageSaleResponse,
  Organization,
} from "../../../../../../../../utils/types/orgType";
import { useContextClientId } from "../../../../ClientDetail";
import AddOrgClientFormik from "../formik/ClientAddOrgFormik";

const ClientAddOrgModal: FC<ShowModal> = ({ isOpened, handleClose }) => {
  const outletContext = useContextClientId();
  const username = useAppSelector(selectUsername);
  const [organizations, setOrganizations] = useState<Organization[]>();
  const userOrgId = useAppSelector(selectUserOrgId);
  const [storageResult, setStorageResult] =
    useState<ResultList<ClientStorage>>();
  const [cStorage_Id, setCStorage_Id] = useState<string>("");
  const [storageSales, setStorageSales] = useState<ClientStorageSaleResponse[]>(
    []
  );
  const { filter } = SearchFilter<ClientStorageFilter>({
    search: "",
    index: 0,
    maxResult: 20,
  });
  const handleChangeStorageId = (event: ChangeEvent<HTMLInputElement>) => {
    setCStorage_Id(event.target.value);
  };

  useEffect(() => {
    userOrgId &&
      getAllOrganization(userOrgId).then((data) => {
        setOrganizations(data.data?.data);
      });
    searchStorage(outletContext.clientId, filter).then((data) =>
      setStorageResult(data.data?.data)
    );
    cStorage_Id &&
      getStorageDetail(outletContext.clientId, cStorage_Id).then((data) => {
        setStorageSales(data.data?.data?.sales);
      });
    console.log(storageSales);
  }, [userOrgId, outletContext.clientId, cStorage_Id]);

  return (
    <>
      <Modal show={isOpened} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm tổ chức</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={AddOrgClientFormik.initValue}
            onSubmit={async (values, actions) => {
              if (outletContext.clientId) {
                actions.setSubmitting(true);
                values.byUser = username;
                if (values.storageRequest) {
                  values.storageRequest.cStorageId = cStorage_Id;
                  values.storageRequest.byUser = username;
                }

                const fetch = await addOrganizationClient(
                  outletContext.clientId,
                  values
                );

                AddOrgClientFormik.handleSubmit(actions, fetch.errors);
              }
            }}
          >
            {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="text-center">
                  <Col>
                    <FormSelectCustom
                      className="row mb-1"
                      label="Tổ chức"
                      name="orgId"
                      handleChange={handleChange}
                      options={organizations}
                      optionValue={"orgId"}
                      optionLabel={"name"}
                      error={errors.orgId}
                    />
                    <FormInput
                      className="row mb-1"
                      label="Tên"
                      placeholder="Nhập tên để phân biệt"
                      name="name"
                      value={values.name}
                      handleChange={handleChange}
                    />
                    <FormSelectCustom
                      className="row mb-2"
                      label="Lưu trữ"
                      name="cStorage_Id"
                      options={storageResult?.resultList}
                      handleChange={handleChangeStorageId}
                      optionValue={"id"}
                      optionLabel={"name"}
                    />

                    {cStorage_Id && (
                      <>
                        <FormSelectCustom
                          className="row mb-2"
                          label="Thanh toán"
                          name="storageRequest.cStorageSaleId"
                          options={storageSales}
                          handleChange={handleChange}
                          optionValue={"id"}
                          optionLabel={"price"}
                          optionLabelSubs={["currencyCode"]}
                        />
                        <FormCheckBox
                          className="row mb-2"
                          label="Sử dụng"
                          result={[{ label: "mặc định", value: true }]}
                          name={"storageRequest.isDefault"}
                          labelField={"label"}
                          valueField={"value"}
                          handleChange={handleChange}
                          inline
                        />
                      </>
                    )}
                    <FormInput
                      className="row mb-1"
                      label="Mô tả"
                      placeholder="Mô tả..."
                      name="description"
                      value={values.description}
                      handleChange={handleChange}
                      row={2}
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

export default ClientAddOrgModal;
