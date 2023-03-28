import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { BaseFilter } from "service-sdk/lib/types/BaseType";
import IconButton from "../../../../../../../components/icon-button/IconButton";
import InputSearch from "../../../../../../../components/input/input-search/InputSearch";
import SearchPage from "../../../../../../../components/search-page/SearchPage";
import TableCutom, {
  ColumnCustom,
} from "../../../../../../../components/table-custom/TableCustom";
import { selectUserOrgId } from "xuanluan-component/lib/redux/auth/auth-selectors";
import { useAppSelector } from "xuanluan-component/lib/redux/store";
import SearchFilter from "../../../../../../../utils/search/SearchFilter";
import { searchOrganizationClient } from "../../../../../../../utils/service-api/org-service-api";
import { ResultList } from "../../../../../../../utils/types/baseType";
import { OrganizationClient } from "../../../../../../../utils/types/orgType";
import { useContextClientId } from "../../../ClientDetail";
import AddOrgClientModal from "./modal/ClientAddOrgModal";

const columns: ColumnCustom[] = [
  { field: "orgId", header: "Mã Tổ chức" },
  { field: "description", header: "Mô tả" },
  { field: "createdAt", header: "Ngày tạo" },
];

const ClientManagementTab = () => {
  const outletContext = useContextClientId();
  const [show, setShow] = useState(false);
  const [result, setResult] = useState<ResultList<OrganizationClient>>();
  const { filter, changePageFilter, handleFilter } = SearchFilter<BaseFilter>({
    search: "",
    offset: 0,
    maxResult: 20,
  });
  const userOrgId = useAppSelector(selectUserOrgId);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const searchFunction = () => {
    searchOrganizationClient(outletContext.clientId, userOrgId, filter).then(
      (data) => setResult(data.data?.data)
    );
  };

  useEffect(() => {
    userOrgId && searchFunction();
  }, [filter.offset, filter.maxResult, outletContext.clientId, userOrgId]);

  return (
    <>
      {result && (
        <Col className="main">
          <div className="main-header">
            <Row>
              <Col sm={12} lg={4} xl={5}>
                <h4 className="mt-1">Danh Sách Tổ Chức Của Dịch Vụ</h4>
              </Col>
              <Col sm={12} lg={4} xl={4}>
                <Form>
                  <InputSearch
                    icon="fa-solid fa-magnifying-glass"
                    placeHolder="Tìm kiếm"
                    name="search"
                    value={filter.search}
                    handleChange={handleFilter}
                    hanleClick={searchFunction}
                  />
                </Form>
              </Col>
              <Col sm={12} lg={4} xl={3}>
                <IconButton
                  className="btn-custom ms-3"
                  type="button"
                  icon={"fa-solid fa-plus"}
                  tittle="Thêm tổ chức"
                  onClick={handleShow}
                />
                {show && (
                  <AddOrgClientModal
                    handleClose={handleClose}
                    isOpened={show}
                  />
                )}
              </Col>
            </Row>
            <TableCutom
              data={result}
              columns={columns}
              toPage={"/dashboard/org-detail"}
              pathVariable={"orgId"}
            />
            <SearchPage
              dataResult={result}
              handleChange={handleFilter}
              changePageClick={changePageFilter}
            />
          </div>
        </Col>
      )}
    </>
  );
};

export default ClientManagementTab;
