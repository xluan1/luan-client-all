import React, { useEffect, useState } from "react";
import CardContent from "../../../../../../components/card-custom/CardContent";
import { getOrganization } from "../../../../../../utils/service-api/org-service-api";
import { Organization } from "../../../../../../utils/types/orgType";
import { useContextOrgId } from "../../../../OrganizationDetail";
import ContentOrgTab from "./ContentOrgTab";

const OrganizationTab = () => {
  const outletContext = useContextOrgId();
  const [orgInfo, setOrgInfo] = useState<Organization>();

  useEffect(() => {
    getOrganization(outletContext.orgId).then((data) => {
      setOrgInfo(data?.data?.data);
    });
  }, [outletContext.orgId]);

  return (
    <>
      {orgInfo && (
        <CardContent
          title="Thông tin của dịch vụ"
          content={<ContentOrgTab result={orgInfo} />}
        />
      )}
    </>
  );
};

export default OrganizationTab;
