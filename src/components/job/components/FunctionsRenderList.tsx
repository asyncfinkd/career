import React from "react";

const FunctionsRenderList: React.FC<any> = ({ list }: any) => {
  return (
    <>
      <p className="ql-align-justify">
        <strong>&nbsp;</strong>
      </p>
      <p
        className="ql-align-justify"
        style={{
          fontFamily: "MarkGEO",
        }}
      >
        <strong
          style={{
            backgroundColor: "rgb(244, 244, 245)",
          }}
        >
          ფუნქციები:
        </strong>
      </p>
      {list?.map((item: any) => {
        return (
          <>
            <ul>
              <li
                style={{
                  fontFamily: "MarkGEO",
                }}
              >
                {item.title}
              </li>
            </ul>
          </>
        );
      })}
    </>
  );
};

export default FunctionsRenderList;
