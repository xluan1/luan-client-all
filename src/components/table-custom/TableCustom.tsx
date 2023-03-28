import React, { FC } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ResultList } from "../../utils/types/baseType";

interface TypeTable {
  className?: string;
  data?: ResultList<any>;
  columns: ColumnCustom[];
  toPage?: string;
  pathVariable?: string;
}

interface TypeCol {
  header: string;
}

interface TypeRow {
  item: any;
  column: ColumnCustom[];
  toPage?: string;
  pathVariable?: string;
}

export interface ColumnCustom {
  field: string;
  header: string;
}

/******************* function for table components *******************/

const TableColumn: FC<TypeCol> = ({ header }) => <th>{getCaps(header)}</th>;

const convertData = (field: string, data: any): any => {
  if (field === "createdAt" || field === "updatedAt") {
    if (typeof data === "number" || typeof data === "string") {
      return new Date(data).toLocaleString();
    }
  }

  return data;
};

const TableRow: FC<TypeRow> = ({
  item,
  column,
  toPage,
  pathVariable = "id",
}) => (
  <tr className="text-center">
    {column.map((columnItem: ColumnCustom) => {
      return (
        <td key={columnItem.field}>
          {convertData(columnItem.field, item[columnItem.field])}
        </td>
      );
    })}
    {toPage && (
      <td>
        <Link to={toPage + "/" + item[pathVariable]}>Chi tiết</Link>
      </td>
    )}
  </tr>
);

const TableCutom: FC<TypeTable> = ({
  className,
  data,
  columns,
  toPage,
  pathVariable,
}) => {
  return (
    <Table bordered hover className={className ? className : "mt-3"}>
      <thead>
        <tr className="text-center">
          {columns &&
            columns.map((column: ColumnCustom) => (
              <TableColumn key={column.field} header={column.header} />
            ))}
        </tr>
      </thead>
      <tbody>
        {data?.resultList &&
          data?.resultList.map((item: any) => (
            <React.Fragment key={item.id}>
              <TableRow
                item={item}
                column={columns}
                toPage={toPage}
                pathVariable={pathVariable}
              />
            </React.Fragment>
          ))}
      </tbody>
    </Table>
  );
};

const getCaps = (header: string) => {
  return header.toUpperCase();
};

export default TableCutom;
