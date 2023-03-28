import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { BaseFilter } from "service-sdk/lib/types/BaseType";
import IconButton from "../../../../../components/icon-button/IconButton";
import InputSearch from "../../../../../components/input/input-search/InputSearch";
import SearchPage from "../../../../../components/search-page/SearchPage";
import TableCutom, {
  ColumnCustom,
} from "../../../../../components/table-custom/TableCustom";
import { clientId } from "../../../../../utils/constants/baseConstants";
import SearchFilter from "../../../../../utils/search/SearchFilter";
import { searchOrganizationClient } from "../../../../../utils/service-api/org-service-api";
import { ResultList } from "../../../../../utils/types/baseType";
import { OrganizationClient } from "../../../../../utils/types/orgType";
import { useContextOrgId } from "../../../OrganizationDetail";
import OrgAddClientModal from "./modal/OrgAddClientModal";

const columns: ColumnCustom[] = [
  { field: "clientId", header: "Mã dịch vụ" },
  { field: "description", header: "Mô tả" },
  { field: "createdAt", header: "Ngày tạo" },
];

const OrgManagementTab = () => {
  const outletContext = useContextOrgId();
  const [result, setResult] = useState<ResultList<OrganizationClient>>();
  const { filter, changePageFilter, handleFilter } = SearchFilter<BaseFilter>({
    search: "",
    offset: 0,
    maxResult: 20,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    searchOrganizationClient(clientId, outletContext.orgId, filter).then(
      (data) => setResult(data.data?.data)
    );
  }, [filter.offset, filter.maxResult, outletContext.orgId]);
  return (
    <>
      <Col className="main">
        <div className="main-header">
          <Row>
            <Col sm={12} lg={4} xl={5}>
              <h4 className="mt-1">Danh Sách Dịch Vụ Của Tổ Chức</h4>
            </Col>
            <Col sm={12} lg={4} xl={4}>
              <Form>
                <InputSearch
                  icon="fa-solid fa-magnifying-glass"
                  placeHolder="Tìm kiếm"
                  name="search"
                  value={filter.search}
                  handleChange={handleFilter}
                  hanleClick={() => {
                    searchOrganizationClient(
                      clientId,
                      outletContext.orgId,
                      filter
                    ).then((data) => setResult(data.data?.data));
                  }}
                />
              </Form>
            </Col>
            <Col sm={12} lg={4} xl={3}>
              <IconButton
                className="btn-custom ms-3"
                type="button"
                icon={"fa-solid fa-plus"}
                tittle="Thêm dịch vụ"
                onClick={handleShow}
              />
              {show && (
                <OrgAddClientModal handleClose={handleClose} isOpened={show} />
              )}
            </Col>
          </Row>
          <TableCutom data={result} columns={columns} />
          <SearchPage
            dataResult={result}
            handleChange={handleFilter}
            changePageClick={changePageFilter}
          />
        </div>
      </Col>
    </>
  );
};

export default OrgManagementTab;
