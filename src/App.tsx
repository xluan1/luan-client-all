import React, { FC, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivatedRoutes, { isSuccessLogin } from "./utils/PrivatedRoutes";
import LoginTemplate from "./templates/LoginTL";
import LoginOTPTL from "./templates/LoginOTPTL";
import LoginPINTL from "./templates/LoginPINTL";
import DashBoardTL from "./templates/DashBoardTL";
import ClientServiceTL from "./templates/ClientServiceTL";
import PageNotFoundTL from "./templates/PageNotFoundTL";
import PageInternalServer from "./pages/errors/PageInternalServer";
import ClientDetailTL from "./templates/ClientDetailTL";
import ClientInfoTab from "./pages/clients/client-services/client/tabs/child-tabs/client-info/ClientInfoTab";
import OrganizationListTL from "./templates/OrganizationListTL";
import OrganizationDetailTL from "./templates/OrganizationDetailTL";
import OrganizationInfoTab from "./pages/organizations/tabs/child-tabs/info/detail/OrganizationInfoTab";
import OrganizationTab from "./pages/organizations/tabs/child-tabs/info/common/OrganizationTab";
import AccountOrgManagementTab from "./pages/organizations/tabs/child-tabs/accounts-org/AccountOrgManagementTab";
import AccountClientManagementTab from "./pages/clients/client-services/client/tabs/child-tabs/accounts-client/AccountClientManagementTab";
import ClientManagementTab from "./pages/clients/client-services/client/tabs/child-tabs/org-management/ClientManagementTab";
import OrgManagementTab from "./pages/organizations/tabs/child-tabs/client-management/OrgManagementTab";
import { useAppDispatch } from "xuanluan-component/lib/redux/store";
import { JwtResponse } from "xuanluan-component/lib/utils/types/authType";
import { setCurrentUser } from "xuanluan-component/lib/redux/auth/auth-slice";
import { clientId } from "./utils/constants/baseConstants";
import ClientStoragesTab from "./pages/clients/client-services/client/tabs/child-tabs/storages-client/ClientStoragesTab";

const App: FC = () => {
  const isSuccess = isSuccessLogin();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const info = localStorage.getItem(clientId + "currentUser");
    if (info) {
      const currentUser: JwtResponse = JSON.parse(info);
      currentUser && dispatch(setCurrentUser(currentUser));
    }
  }, []);
  return (
    <>
      <Routes>
        {/* if successful login => can't to login page, opposite */}
        {!isSuccess ? (
          <Route path="/login" element={<LoginTemplate />} />
        ) : (
          <Route path="/login" element={<Navigate to="/dashboard" replace />} />
        )}

        <Route element={<PrivatedRoutes />}>
          <Route path="/dashboard" element={<DashBoardTL />} />
          {/* client pages */}
          <Route path="/dashboard/client-list" element={<ClientServiceTL />} />
          <Route path="/dashboard/org-list" element={<OrganizationListTL />} />
          {/* client detail */}
          <Route
            path="/dashboard/client-detail/:clientId"
            element={<ClientDetailTL />}
          >
            <Route
              path="/dashboard/client-detail/:clientId"
              element={<Navigate replace to="info-tab" />}
            />
            <Route path="info-tab" element={<ClientInfoTab />} />
            <Route path="management-tab" element={<ClientManagementTab />} />
            <Route
              path="account-client-tab"
              element={<AccountClientManagementTab />}
            />
            <Route path="storage-tab" element={<ClientStoragesTab />} />
          </Route>
          {/* organization detail */}
          <Route
            path="/dashboard/org-detail/:orgId"
            element={<OrganizationDetailTL />}
          >
            <Route
              path="/dashboard/org-detail/:orgId"
              element={<Navigate replace to="info-tab" />}
            />
            <Route path="info-tab" element={<OrganizationTab />} />
            <Route path="info-detail-tab" element={<OrganizationInfoTab />} />
            <Route path="management-tab" element={<OrgManagementTab />} />
            <Route
              path="account-org-tab"
              element={<AccountOrgManagementTab />}
            />
          </Route>
        </Route>
        {/* login 2FA */}
        <Route path="/check-otp" element={<LoginOTPTL />} />
        <Route path="/check-pin" element={<LoginPINTL />} />

        {/* error */}
        <Route path="/internal-server" element={<PageInternalServer />} />

        <Route path="*" element={<PageNotFoundTL />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};

export default App;
