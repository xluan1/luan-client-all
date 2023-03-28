import React, { useEffect, useState } from "react";
import CardContent from "../../../../../../../components/card-custom/CardContent";
import { getClientDetailDev } from "../../../../../../../utils/service-api/client-service-api";
import { ClientDetail } from "../../../../../../../utils/types/clientType";
import { useContextClientId } from "../../../ClientDetail";
import "./ClientInfoTab.css";
import ContentClientInfoTab from "./ContentClientInfoTab";

const ClientInfoTab = () => {
  const outletContext = useContextClientId();
  const [clientDetail, setClientDetail] = useState<ClientDetail>();

  useEffect(() => {
    getClientDetailDev(outletContext.clientId).then((data) => {
      setClientDetail(data?.data?.data);
    });
  }, [outletContext.clientId]);

  return (
    <>
      {clientDetail && (
        <CardContent
          title="Thông tin của dịch vụ"
          content={<ContentClientInfoTab result={clientDetail} />}
        />
      )}
    </>
  );
};

export default ClientInfoTab;
