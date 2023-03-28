import React from "react";

const ContentMain = () => {
  return (
    <div className="main col">
      <div className="main-header">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <h4>Trang Quản Lý</h4>
            <p>Đây là trang quản lý dữ liệu của các dịch vụ.</p>
          </div>
          <div className="col-sm-12 col-lg-3">
            <h5>Hiển thị theo:</h5>
            <select className="form-select">
              <option value={1}>Hôm nay</option>
              <option value={4}>Tuần này</option>
              <option value={2}>Tháng này</option>
              <option value={3}>Năm nay</option>
            </select>
          </div>
          <div className="col-sm-12 col-lg-3">
            <h5>Dịch vụ:</h5>
            <select className="form-select">
              <option value={1}>Thương mại</option>
              <option value={2}>Truyện tranh</option>
            </select>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="card mb-2">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="card-title">Lượt truy cập</div>
                </div>
                <div className="col-auto">
                  <i className="icon-dashboard fa-solid fa-eye" />
                </div>
                <div className="quantity-dashboard">2,5M</div>
              </div>
            </div>
          </div>
        </div>
        {/* col-sm-6 end */}
        <div className="col-sm-6 col-lg-3">
          <div className="card mb-2">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="card-title">Tổng thu nhập</div>
                </div>
                <div className="col-auto">
                  <i className="icon-dashboard fa-solid fa-sack-dollar" />
                </div>
                <div className="quantity-dashboard">250.000.000đ</div>
              </div>
            </div>
          </div>
        </div>
        {/* col-sm-6 end */}
        <div className="col-sm-6 col-lg-3">
          <div className="card mb-2">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="card-title">Tổng đơn hàng</div>
                </div>
                <div className="col-auto">
                  <i className="icon-dashboard fa-solid fa-basket-shopping" />
                </div>
                <div className="quantity-dashboard">250.000</div>
              </div>
            </div>
          </div>
        </div>
        {/* col-sm-6 end */}
        <div className="col-sm-6 col-lg-3">
          <div className="card mb-2">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="card-title">Lượt đăng ký</div>
                </div>
                <div className="col-auto">
                  <i className="icon-dashboard fa-solid fa-user-plus" />
                </div>
                <div className="quantity-dashboard">250</div>
              </div>
            </div>
          </div>
        </div>
        {/* col-sm-6 end */}
      </div>
      {/* card end */}
      <div className="row">
        <div className="col-sm-12 col-lg-6 mt-3">
          <div className="card flex-fill w-100">
            <div className="card-body py-3">
              <div className="card-title mt-2 ms-3">
                Lượt xem của kênh truyện tranh
              </div>
              <canvas id="myChart" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 mt-3">
          <div className="card flex-fill w-100">
            <div className="card-body py-3">
              <div className="card-title mt-2 ms-3">
                Thu nhập của kênh thương mại
              </div>
              <canvas id="custom_canvas_round" />
            </div>
          </div>
        </div>
      </div>
      {/* chart end */}
      <div className="row">
        <div className="col-12">
          <div className="card flex-fill mt-5">
            <div className="card-body">
              <div className="card-title">Danh sách đơn hàng</div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Bird</td>
                      <td>Lion</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
