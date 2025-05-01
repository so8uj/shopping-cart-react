import React from "react";

const PageBanner = (props) => {
    const {pageTitle} = props
  return (
    <div className="page-banner">
      <div className="container">
        <h1>{pageTitle}</h1>
      </div>
    </div>
  );
};

export default PageBanner;
