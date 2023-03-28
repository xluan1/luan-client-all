import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../pages/header/Header";
import OrganizationDetail from "../pages/organizations/OrganizationDetail";
import SideBar from "../pages/sidebar/SideBar";

const OrganizationDetailTL = () => {
  return (
    <Container fluid>
      <Row>
        <Header />
        <SideBar />
        <OrganizationDetail />
      </Row>
    </Container>
  );
};

export default OrganizationDetailTL;
