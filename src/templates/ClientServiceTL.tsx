import React from "react";
import { Container, Row } from "react-bootstrap";
import ClientServices from "../pages/clients/client-services/client/ClientServices";
import Header from "../pages/header/Header";
import SideBar from "../pages/sidebar/SideBar";

const ClientServiceTL = () => {
  return (
    <Container fluid>
      <Row>
        <Header />
        <SideBar />
        <ClientServices />
      </Row>
    </Container>
  );
};

export default ClientServiceTL;
