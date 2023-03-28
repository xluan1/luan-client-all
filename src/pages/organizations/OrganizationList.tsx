import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { BaseFilter } from "service-sdk/lib/types/BaseType";
import IconButton from "../../components/icon-button/IconButton";
import InputSearch from "../../components/input/input-search/InputSearch";
import SearchPage from "../../components/search-page/SearchPage";
import TableCutom, {
  ColumnCustom,
} from "../../components/table-custom/TableCustom";
import { selectUserOrgId } from "xuanluan-component/lib/redux/auth/auth-selectors";
import { useAppSelector } from "xuanluan-component/lib/redux/store";
import SearchFilter from "../../utils/search/SearchFilter";
import { searchOrganization } from "../../utils/service-api/org-service-api";
import { ResultList } from "../../utils/types/baseType";
import { Organization } from "../../utils/types/orgType";
import OrgModal from "./modal/OrgModal";

const columns: ColumnCustom[] = [
  { field: "orgId", header: "Mã" },
  { field: "name", header: "Tên" },
  { field: "description", header: "Mô tả" },
  { field: "createdAt", header: "Ngày tạo" },
];

const OrganizationList = () => {
  const { filter, changePageFilter, handleFilter } = SearchFilter<BaseFilter>({
    search: "",
    maxResult: 20,
    offset: 0,
  });
  const [result, setResult] = useState<ResultList<Organization>>();
  const [show, setShow] = useState(false);
  const userOrgId = useAppSelector(selectUserOrgId);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    userOrgId &&
      searchOrganization(userOrgId, filter).then((data) => {
        setResult(data.data?.data);
      });
  }, [filter.offset, filter.maxResult, userOrgId]);

  return (
    <Col className="main">
      <div className="main-header">
        <Row>
          <Col sm={12} lg={4} xl={5}>
            <h4 className="mt-1">Danh Sách Tổ Chức</h4>
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
                  searchOrganization(userOrgId, filter).then((data) => {
                    setResult(data.data?.data);
                  });
                }}
              />
            </Form>
          </Col>
          <Col sm={12} lg={4} xl={3}>
            <IconButton
              className="btn-custom ms-3"
              type="button"
              icon={"fa-solid fa-plus"}
              tittle="Thêm Tổ chức"
              onClick={handleShow}
            />
            {show && <OrgModal isOpened={show} handleClose={handleClose} />}
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
  );
};

export default OrganizationList;
