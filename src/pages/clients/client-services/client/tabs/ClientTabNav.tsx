import React, { FC } from "react";
import { Card, Nav } from "react-bootstrap";
import { Params, useLocation } from "react-router-dom";
import "./ClientTabNav.css";

type PropTypes = {
  clientId?: Readonly<Params<string>>;
};

const ClientTabNav: FC<PropTypes> = ({ clientId }) => {
  const location = useLocation();
  const detailPath = "/dashboard/client-detail/" + clientId?.clientId;

  return (
    <Card.Header>
      <Nav variant="tabs" defaultActiveKey={location.pathname}>
        <Nav.Item>
          <Nav.Link
            href={`${detailPath}/info-tab`}
            disabled={location.pathname === `${detailPath}/info-tab`}
          >
            Thông tin
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href={`${detailPath}/storage-tab`}
            disabled={location.pathname === `${detailPath}/storage-tab`}
          >
            Lưu trữ
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href={`${detailPath}/management-tab`}
            disabled={location.pathname === `${detailPath}/management-tab`}
          >
            Tổ chức
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href={`${detailPath}/account-client-tab`}
            disabled={location.pathname === `${detailPath}/account-client-tab`}
          >
            Tài khoản
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
  );
};

export default ClientTabNav;
