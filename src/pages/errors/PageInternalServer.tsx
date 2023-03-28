import React from "react";
import ContentBackground from "../../components/content-background/ContentError";
import notFoundImage from "./svg/page_internal_server.svg";
import "./style/NotFound.css";

const PageInternalServer = () => {
  return (
    <ContentBackground
      title="Đã xảy ra lỗi trong quá trình xử lý"
      toPage="/dashboard"
      srcImage={notFoundImage}
      rollBack={true}
    />
  );
};

export default PageInternalServer;
