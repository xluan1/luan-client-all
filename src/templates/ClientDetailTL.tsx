import React from "react";
import { Container, Row } from "react-bootstrap";
import ClientDetail from "../pages/clients/client-services/client/ClientDetail";
import Header from "../pages/header/Header";
import SideBar from "../pages/sidebar/SideBar";

const ClientDetailTL = () => {
  return (
    <Container fluid>
      <Row>
        <Header />
        <SideBar />
        <ClientDetail />
      </Row>
    </Container>
  );
};

export default ClientDetailTL;
