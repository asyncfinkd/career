import React from "react";

const KnowRenderList: React.FC<any> = ({ know }: any) => {
  return (
    <>
      <p>
        <br />
      </p>
      <p>
        <strong style={{ backgroundColor: "rgb(244, 244, 245)" }}>
          ცოდნა, უნარები:
        </strong>
      </p>
      {know?.map((item: any) => {
        return (
          <>
            <p>
              ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {item.title}
            </p>
          </>
        );
      })}
    </>
  );
};

export default KnowRenderList;
