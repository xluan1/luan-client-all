import React, { FC, ReactElement, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { BaseFilter } from "service-sdk/lib/types/BaseType";
import IconButton from "../../../../components/icon-button/IconButton";
import InputSearch from "../../../../components/input/input-search/InputSearch";
import SearchPage from "../../../../components/search-page/SearchPage";
import TableCutom, {
  ColumnCustom,
} from "../../../../components/table-custom/TableCustom";
import { clientId } from "../../../../utils/constants/baseConstants";
import SearchFilter from "../../../../utils/search/SearchFilter";
import { searchClient } from "../../../../utils/service-api/client-service-api";
import { ResultList } from "../../../../utils/types/baseType";
import { Client } from "../../../../utils/types/clientType";
import ClientModal from "./modal/ClientModal";

const columns: ColumnCustom[] = [
  { field: "clientId", header: "Mã" },
  { field: "name", header: "Tên" },
  { field: "description", header: "Mô tả" },
  { field: "createdAt", header: "Ngày tạo" },
];

const ClientServices: FC = (): ReactElement => {
  const { filter, changePageFilter, handleFilter } = SearchFilter<BaseFilter>({
    search: "",
    offset: 0,
    maxResult: 20,
  });
  const [show, setShow] = useState(false);
  const [result, setResult] = useState<ResultList<Client>>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    searchClient(clientId, filter).then((data) => {
      setResult(data.data?.data);
    });
  }, [filter.offset, filter.maxResult]);

  return (
    <>
      <Col className="main">
        <div className="main-header">
          <Row>
            <Col sm={12} lg={4} xl={5}>
              <h4 className="mt-1">Danh Sách Dịch Vụ</h4>
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
                    searchClient(clientId, filter).then((data) => {
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
                tittle="Thêm dịch vụ"
                onClick={handleShow}
              />
              {show && (
                <ClientModal handleClose={handleClose} isOpened={show} />
              )}
            </Col>
          </Row>
          <TableCutom
            data={result}
            columns={columns}
            toPage={"/dashboard/client-detail"}
            pathVariable={"clientId"}
          />
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

export default ClientServices;
