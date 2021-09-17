import React from "react";
import { Helmet } from "react-helmet";

const ErrorPages: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <p>404 page</p>
    </>
  );
};

export default ErrorPages;
