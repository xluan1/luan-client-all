import React, { useEffect, useState } from "react";
import CardContent from "../../../../../../components/card-custom/CardContent";
import { getOrganizationInfo } from "../../../../../../utils/service-api/org-service-api";
import { OrganizationInfo } from "../../../../../../utils/types/orgType";
import { useContextOrgId } from "../../../../OrganizationDetail";
import ContentOrgInfoTab from "./ContentOrgInfoTab";

const OrganizationInfoTab = () => {
  const outletContext = useContextOrgId();
  const [orgInfo, setOrgInfo] = useState<OrganizationInfo>();

  useEffect(() => {
    getOrganizationInfo(outletContext.orgId).then((data) => {
      setOrgInfo(data?.data?.data);
    });
  }, [outletContext.orgId]);

  return (
    <>
      {orgInfo && (
        <CardContent
          title="Thông tin của dịch vụ"
          content={<ContentOrgInfoTab result={orgInfo} />}
        />
      )}
    </>
  );
};

export default OrganizationInfoTab;
