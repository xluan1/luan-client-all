import { Formik } from "formik";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import FormCheckBox from "../../../../../../components/form/checkbox/FormCheckBox";
import FormInput from "../../../../../../components/form/form-input/FormInput";
import FormSelectCustom from "../../../../../../components/form/form-select/FormSelect";
import { selectUsername } from "xuanluan-component/lib/redux/auth/auth-selectors";
import { useAppSelector } from "xuanluan-component/lib/redux/store";
import SearchFilter from "../../../../../../utils/search/SearchFilter";
import {
  getAllBusinessClient,
  getStorageDetail,
  searchStorage,
} from "../../../../../../utils/service-api/client-service-api";
import { addOrganizationClient } from "../../../../../../utils/service-api/org-service-api";
import { ResultList, ShowModal } from "../../../../../../utils/types/baseType";
import {
  Client,
  ClientStorage,
  ClientStorageFilter,
} from "../../../../../../utils/types/clientType";
import { ClientStorageSaleResponse } from "../../../../../../utils/types/orgType";
import ClientAddOrgFormik from "../../../../../clients/client-services/client/tabs/child-tabs/org-management/formik/ClientAddOrgFormik";
import { useContextOrgId } from "../../../../OrganizationDetail";

const OrgAddClientModal: FC<ShowModal> = ({ isOpened, handleClose }) => {
  const outletContext = useContextOrgId();
  const username = useAppSelector(selectUsername);
  const [clients, setClients] = useState<Client[]>();
  const [client_Id, setClient_Id] = useState<string>("");
  const [storageResult, setStorageResult] =
    useState<ResultList<ClientStorage>>();
  const [cStorage_Id, setCStorage_Id] = useState<string>("");
  const [storageSales, setStorageSales] = useState<ClientStorageSaleResponse[]>(
    []
  );
  const { filter } = SearchFilter<ClientStorageFilter>({
    search: "",
    offset: 0,
    maxResult: 20,
  });
  const handleChangeClientId = (event: ChangeEvent<HTMLInputElement>) => {
    setClient_Id(event.target.value);
    event.target.value === "" && setCStorage_Id("");
  };
  const handleChangeStorageId = (event: ChangeEvent<HTMLInputElement>) => {
    setCStorage_Id(event.target.value);
  };

  useEffect(() => {
    getAllBusinessClient().then((data) => {
      setClients(data.data?.data);
    });
    client_Id &&
      searchStorage(client_Id, filter).then((data) =>
        setStorageResult(data.data?.data)
      );
    cStorage_Id &&
      getStorageDetail(client_Id, cStorage_Id).then((data) => {
        setStorageSales(data.data?.data?.sales);
      });
  }, [outletContext.orgId, client_Id, cStorage_Id]);

  return (
    <>
      <Modal show={isOpened} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm dịch vụ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={ClientAddOrgFormik.initValue}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true);
              values.orgId = outletContext.orgId;
              values.byUser = username;
              if (values.storageRequest) {
                values.storageRequest.cStorageId = cStorage_Id;
                values.storageRequest.byUser = username;
              }

              const fetch = await addOrganizationClient(client_Id, values);
              ClientAddOrgFormik.handleSubmit(actions, fetch.errors);
              fetch.data && setCStorage_Id("");
            }}
          >
            {({ handleSubmit, handleChange, values, isSubmitting }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="text-center">
                  <Col>
                    <FormInput
                      className="row mb-2"
                      label="Tên"
                      placeholder="Nhập tên"
                      name="name"
                      value={values.name}
                      handleChange={handleChange}
                    />
                    <FormSelectCustom
                      className="row mb-2"
                      label="Dịch vụ"
                      name="client_Id"
                      handleChange={handleChangeClientId}
                      options={clients}
                      optionValue={"clientId"}
                      optionLabel={"name"}
                    />
                    {client_Id && (
                      <>
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
                      </>
                    )}
                    <FormInput
                      className="row mb-2"
                      label="Mô tả"
                      placeholder="Mô tả..."
                      name="description"
                      value={values.description}
                      handleChange={handleChange}
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

export default OrgAddClientModal;
