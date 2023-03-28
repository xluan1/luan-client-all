import React, { ChangeEventHandler, FC } from "react";
import { Col, Form, Pagination, Row } from "react-bootstrap";
import { ResultList } from "../../utils/types/baseType";

const pageNumbers = (dataResult?: ResultList<any>, changePageClick?: any) => {
  let isFirst = false;
  let isLast = false;
  let totalPage = 0;
  let pages = [];
  if (dataResult) {
    totalPage = Math.ceil(dataResult.total / dataResult.maxResult);
    //totalPage làm tròn đến số nguyên >= chính nó(vd: 0.3=> 1; 0.6=>1)
    isFirst = dataResult.index === 0;
    isLast = dataResult.index + 1 >= totalPage;

    for (let index = 0; index < totalPage; index++) {
      pages.push(
        <Pagination.Item
          key={index}
          onClick={() => changePageClick(index)}
          disabled={index === dataResult.index}
        >
          {index + 1}
        </Pagination.Item>
      );
    }
  }

  return { pages, isFirst, isLast, totalPage };
};

type PropsType = {
  dataResult?: ResultList<any>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  nameFilter?: string;
  changePageClick: (page: number) => void | undefined;
};

const SearchPage: FC<PropsType> = ({
  dataResult,
  handleChange,
  nameFilter = "maxResult",
  changePageClick,
}) => {
  const { pages, isFirst, isLast, totalPage } = pageNumbers(
    dataResult,
    changePageClick
  );

  return (
    <Row>
      <Col className="col-9" md={8}>
        {dataResult && (
          <Pagination>
            <Pagination.First
              onClick={() => changePageClick(0)}
              disabled={isFirst}
            />
            <Pagination.Prev
              onClick={() => changePageClick(dataResult?.index - 1)}
              disabled={isFirst}
            />
            {pages}
            <Pagination.Next
              onClick={() => changePageClick(dataResult?.index + 1)}
              disabled={isLast}
            />
            <Pagination.Last
              onClick={() => changePageClick(totalPage - 1)}
              disabled={isLast}
            />
          </Pagination>
        )}
      </Col>
      <Col className="col-3" md={2}>
        <Form.Control name={nameFilter} as={"select"} onChange={handleChange}>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
        </Form.Control>
      </Col>
    </Row>
  );
};

export default SearchPage;
