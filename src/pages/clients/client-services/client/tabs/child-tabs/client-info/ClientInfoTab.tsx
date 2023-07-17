import React, { useEffect, useState } from "react";
import CardContent from "../../../../../../../components/card-custom/CardContent";
import { getClient } from "../../../../../../../utils/service-api/client-service-api";
import { Client } from "../../../../../../../utils/types/clientType";
import { useContextClientId } from "../../../ClientDetail";
import "./ClientInfoTab.css";
import ContentClientInfoTab from "./ContentClientInfoTab";

const ClientInfoTab = () => {
  const outletContext = useContextClientId();
  const [client, setClient] = useState<Client>();

  useEffect(() => {
    getClient(outletContext.clientId).then((data) => {
      setClient(data?.data?.data);
    });
  }, [outletContext.clientId]);

  return (
    <>
      {client && (
        <CardContent
          title="Thông tin của dịch vụ"
          content={<ContentClientInfoTab result={client} />}
        />
      )}
    </>
  );
};

export default ClientInfoTab;
