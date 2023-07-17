import React, { useEffect, useState } from "react";
import { useContextClientId } from "../../../ClientDetail";
import { Col, Row } from "react-bootstrap";
import IconButton from "../../../../../../../components/icon-button/IconButton";
import AddClientMenuModal from "./children/AddClientMenuModal";
import ClientMenuTreeTable from "./children/ClientMenuTreeTable";
import { ClientMenuDTO } from "../../../../../../../utils/types/clientType";
import { getClientMenuTree } from "../../../../../../../utils/service-api/client-service-api";

const ClientMenuTab = () => {
  const context = useContextClientId();
  const [show, setShow] = useState(false);
  const [menusTree, setMenusTree] = useState<ClientMenuDTO[]>([]);

  const fetchMenus = () =>
    getClientMenuTree(context.clientId).then((result) =>
      setMenusTree(result.data.data)
    );

  useEffect(() => {
    fetchMenus();
  }, [context.clientId]);

  return (
    <Col className="main">
      <Row style={{ justifyContent: "flex-end" }}>
        <Col sm={12} lg={4} xl={3}>
          <IconButton
            className="btn-custom ms-3"
            type="button"
            icon={"fa-solid fa-plus"}
            tittle="Thêm"
            onClick={() => setShow(true)}
          />
          {show && (
            <AddClientMenuModal
              clientId={context.clientId}
              handleClose={() => setShow(false)}
              isOpened={show}
              fetchMenuTree={fetchMenus}
            />
          )}
        </Col>
      </Row>
      <ClientMenuTreeTable
        clientId={context.clientId}
        menuTree={menusTree}
        fetchMenuTree={fetchMenus}
      />
    </Col>
  );
};

export default ClientMenuTab;
