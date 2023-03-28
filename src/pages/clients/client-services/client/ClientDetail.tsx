import React, { FC, ReactElement } from "react";
import { Col } from "react-bootstrap";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import BreadcrumbCustom, {
  BreadcrumbItem,
} from "../../../../components/breadcrumb-custom/BreadcrumbCustom";
import ClientTabNav from "./tabs/ClientTabNav";

const crumbItems: BreadcrumbItem[] = [
  { title: "Trang chủ", toPage: "/dashboard" },
  { title: "Danh sách dịch vụ", toPage: "/dashboard/client-list" },
  { title: "Chi tiết dịch vụ", toPage: "#", isActive: true },
];

type ContextType = { clientId: string };

const ClientDetail: FC = (): ReactElement => {
  const clientId = useParams();
  return (
    <Col className="main">
      <div className="main-header">
        <BreadcrumbCustom items={crumbItems} />
        <hr />
        <ClientTabNav clientId={clientId} />
        <Outlet context={clientId} />
      </div>
    </Col>
  );
};

export function useContextClientId() {
  return useOutletContext<ContextType>();
}

export default ClientDetail;
