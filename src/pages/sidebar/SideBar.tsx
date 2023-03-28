import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar col-2 collapse show" id="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-user">
          <div className="dropdown">
            {/* auth start */}
            <Link
              to="#"
              className="rounded-circle mb-2"
              id="user"
              data-bs-toggle="dropdown"
            >
              <img
                className="rounded-circle mb-2"
                src="https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg"
                alt="#"
              />
            </Link>
            <ul className="dropdown-menu text-small" aria-labelledby="user">
              <li>
                <Link
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  to="#myModal"
                >
                  Thay đổi ảnh
                </Link>
              </li>
              <li>
                <a href="profile.html" className="dropdown-item">
                  Cài đặt tài khoản
                </a>
              </li>
              <li>
                <a href="change-password.html" className="dropdown-item">
                  Đổi mật khẩu
                </a>
              </li>
              <li>
                <a href="index.html" className="dropdown-item">
                  Đăng Xuất
                </a>
              </li>
            </ul>
          </div>
          <div
            className="modal fade"
            id="myModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Cập nhật ảnh đại diện
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  />
                </div>
                <div className="modal-body">
                  <div className="container">
                    <h4>Ảnh gợi ý</h4>
                    <div className="row">
                      <div className="col-2 d-flex justify-content-center">
                        <img
                          className="img-recommend-modal"
                          src="https://www.tugo.com.vn/wp-content/uploads/1-3339-1415416821.jpg"
                          alt="#"
                        />
                      </div>
                      <div className="col-2 d-flex justify-content-center">
                        <img
                          className="img-recommend-modal"
                          src="https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg"
                          alt="#"
                        />
                      </div>
                      <div className="col-2 d-flex justify-content-center">
                        <img
                          className="img-recommend-modal"
                          src="https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg"
                          alt="#"
                        />
                      </div>
                      <div className="col-2 d-flex justify-content-center">
                        <img
                          className="img-recommend-modal"
                          src="https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg"
                          alt="#"
                        />
                      </div>
                      <div className="col-2 d-flex justify-content-center">
                        <img
                          className="img-recommend-modal"
                          src="https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg"
                          alt="#"
                        />
                      </div>
                      <div className="col-2 d-flex justify-content-center">
                        <img
                          className="img-recommend-modal"
                          src="https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-4.jpg"
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Đóng
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* auth end */}
          <div className="fw-bold">Xuan Luan</div>
        </div>
        <hr className="text-success" />
        <ul className="sidebar-nav">
          <li className="sidebar-header">Trang chủ</li>
          <li className="sidebar-item dropend">
            <Link to="/dashboard" className="sidebar-link">
              <i className="fa-solid fa-house" />
              <span className="align-middle">Trang điều khiển</span>
            </Link>
          </li>

          <li className="sidebar-header">Chức năng</li>
          {/* clients */}
          <li className="sidebar-item dropend">
            <Link
              to="#clients"
              className="sidebar-link dropdown-toggle"
              data-bs-toggle="collapse"
            >
              <i className="fa-solid fa-vr-cardboard" />
              <span className="align-middle">Dịch vụ</span>
            </Link>
            <ul id="clients" className="collapse sidebar-dropdown">
              <li className="sidebar-item">
                <Link to={"/dashboard/client-list"} className={"sidebar-link"}>
                  Danh sách dịch vụ
                </Link>
              </li>
            </ul>
          </li>
          {/* clients */}
          <li className="sidebar-item dropend">
            <Link
              to="#services"
              className="sidebar-link dropdown-toggle"
              data-bs-toggle="collapse"
            >
              <i className="fa-solid fa-city" />
              <span className="align-middle">Tổ chức</span>
            </Link>
            <ul id="services" className="collapse sidebar-dropdown">
              <li className="sidebar-item">
                <Link to={"/dashboard/org-list"} className={"sidebar-link"}>
                  Danh sách tổ chức
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
