import React from "react";
import ContentBackground from "../../components/content-background/ContentError";
import notFoundImage from "./svg/page_not_found.svg";
import "./style/NotFound.css";

const PageNotFound = () => {
  return (
    <ContentBackground
      title="Không tìm thấy thông tin trang"
      toPage="/dashboard"
      srcImage={notFoundImage}
      rollBack={true}
    />
  );
};

export default PageNotFound;
