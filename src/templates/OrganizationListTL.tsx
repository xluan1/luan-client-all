import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../pages/header/Header";
import OrganizationList from "../pages/organizations/OrganizationList";
import SideBar from "../pages/sidebar/SideBar";

const OrganizationListTL = () => {
  return (
    <Container fluid>
      <Row>
        <Header />
        <SideBar />
        <OrganizationList />
      </Row>
    </Container>
  );
};

export default OrganizationListTL;
