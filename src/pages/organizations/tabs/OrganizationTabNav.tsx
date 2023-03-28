import React, { FC } from "react";
import { Card, Nav } from "react-bootstrap";
import { Params, useLocation } from "react-router-dom";

type PropTypes = {
  param?: Readonly<Params<string>>;
};

const OrganizationTabNav: FC<PropTypes> = ({ param }) => {
  const location = useLocation();
  const detailPath = "/dashboard/org-detail/" + param?.orgId;

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
            href={`${detailPath}/info-detail-tab`}
            disabled={location.pathname === `${detailPath}/info-detail-tab`}
          >
            Thông tin chi tiết
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href={`${detailPath}/management-tab`}
            disabled={location.pathname === `${detailPath}/client-tab`}
          >
            Dịch vụ
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href={`${detailPath}/account-org-tab`}
            disabled={location.pathname === `${detailPath}/account-org-tab`}
          >
            Tài khoản
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
  );
};

export default OrganizationTabNav;
