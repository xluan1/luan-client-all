import React from "react";
import { Container, Row } from "react-bootstrap";
import ContentMain from "../pages/content/ContentMain";
import Header from "../pages/header/Header";
import SideBar from "../pages/sidebar/SideBar";

const DashBoardTL = () => {
  return (
    <Container fluid>
      <Row>
        <Header />
        <SideBar />
        <ContentMain />
      </Row>
    </Container>
  );
};

export default DashBoardTL;
