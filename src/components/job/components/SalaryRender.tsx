import React from "react";

const SalaryRender: React.FC<any> = ({ salary }: any) => {
  return (
    <>
      <p>
        <br />
      </p>
      <p
        style={{
          fontFamily: "MarkGEO",
        }}
      >
        <strong
          style={{
            backgroundColor: "rgb(244, 244, 245)",
          }}
        >
          ანაზღაურება:{" "}
        </strong>
        {salary}
      </p>
    </>
  );
};

export default SalaryRender;
