import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import IconButton from "../../../../../../../components/icon-button/IconButton";
import InputSearch from "../../../../../../../components/input/input-search/InputSearch";
import SearchPage from "../../../../../../../components/search-page/SearchPage";
import TableCutom, {
  ColumnCustom,
} from "../../../../../../../components/table-custom/TableCustom";
import SearchFilter from "xuanluan-component/lib/utils/search/SearchFilter";
import { searchStorage } from "../../../../../../../utils/service-api/client-service-api";
import { ResultList } from "../../../../../../../utils/types/baseType";
import {
  ClientStorage,
  ClientStorageFilter,
} from "../../../../../../../utils/types/clientType";
import { useContextClientId } from "../../../ClientDetail";
import AddStorageModal from "./modal/AddStorageModal";

const columns: ColumnCustom[] = [
  { field: "name", header: "Tên" },
  { field: "unit", header: "Đơn vị" },
  { field: "url", header: "Đường dẫn" },
  { field: "description", header: "Mô tả" },
  { field: "createdBy", header: "Nguời tạo" },
  { field: "createdAt", header: "Ngày tạo" },
];

const ClientStoragesTab = () => {
  const outletContext = useContextClientId();
  const [show, setShow] = useState(false);
  const [result, setResult] = useState<ResultList<ClientStorage>>();
  const { filter, changePageFilter, handleFilter } =
    SearchFilter<ClientStorageFilter>({
      search: "",
      index: 0,
      maxResult: 20,
    });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const searchFunction = () => {
    searchStorage(outletContext.clientId, filter).then((data) =>
      setResult(data.data?.data)
    );
  };

  useEffect(() => {
    searchFunction();
  }, [filter.index, filter.maxResult, outletContext.clientId]);
  return (
    <>
      <Col className="main">
        <div className="main-header">
          <Row>
            <Col sm={12} lg={4} xl={5}>
              <h4 className="mt-1">Danh Sách Dịch Vụ Lưu Trữ</h4>
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
                tittle="Thêm lưu trữ"
                onClick={handleShow}
              />
              {show && (
                <AddStorageModal handleClose={handleClose} isOpened={show} />
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

export default ClientStoragesTab;
