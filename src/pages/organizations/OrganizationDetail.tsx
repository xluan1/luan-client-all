import React from "react";
import { Col } from "react-bootstrap";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import BreadcrumbCustom, {
  BreadcrumbItem,
} from "../../components/breadcrumb-custom/BreadcrumbCustom";
import OrganizationTabNav from "./tabs/OrganizationTabNav";

const crumbItems: BreadcrumbItem[] = [
  { title: "Trang chủ", toPage: "/dashboard" },
  { title: "Danh sách tổ chức", toPage: "/dashboard/org-list" },
  { title: "Chi tiết tổ chức", toPage: "#", isActive: true },
];

type ContextType = { orgId: string };

const OrganizationDetail = () => {
  const orgId = useParams();

  return (
    <Col className="main">
      <div className="main-header">
        <BreadcrumbCustom items={crumbItems} />
        <hr />
        <OrganizationTabNav param={orgId} />
        <Outlet context={orgId} />
      </div>
    </Col>
  );
};

export function useContextOrgId() {
  return useOutletContext<ContextType>();
}

export default OrganizationDetail;
