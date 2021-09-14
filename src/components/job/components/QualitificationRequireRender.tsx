import React from "react";

const QualificationRequireRender: React.FC<any> = ({
  qualitificationRequire,
}: any) => {
  return (
    <>
      <p className="ql-align-justify">&nbsp;</p>
      <p className="ql-align-justify">
        <strong
          style={{
            backgroundColor: "rgb(244, 244, 245)",
          }}
        >
          საკვალიფიკაციო მოთხოვნები:
        </strong>
      </p>
      <p>
        <strong
          style={{
            backgroundColor: "rgb(244, 244, 245)",
          }}
        >
          განათლება:{" "}
        </strong>
        {qualitificationRequire}
        &nbsp;&nbsp;
      </p>
    </>
  );
};

export default QualificationRequireRender;
