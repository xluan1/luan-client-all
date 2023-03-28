import React from "react";
import IconButton from "../../components/icon-button/IconButton";
import { Logout } from "xuanluan-component/lib/pages/login/formik/ProccessLogin";

import Logo from "./img/logo.png";
import { BASE_URL, clientId } from "../../utils/constants/baseConstants";

const Header = () => {
  return (
    <header className="p-4 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center">
          {/* menu-toggler */}
          <div className="menu-toggler navbar-dark bg-secondary">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebar"
              aria-controls="sidebar"
            >
              <span className="navbar-toggler-icon opacity-50" />
            </button>
          </div>
          <a className="d-flex align-items-center">
            <img className="img-logo" src={Logo} alt="logo" />
          </a>
          <div className="col-3 col-md-4 col-lg-5 me-md-3">
            <h4 className="text-success">Dashboard</h4>
          </div>
          <IconButton
            onClick={() => Logout(BASE_URL, clientId, "/")}
            tittle="Đăng xuất"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
