import React from "react";

const WorkExperienceRenderList: React.FC<any> = ({ workExperience }: any) => {
  return (
    <>
      <p>
        <br />
      </p>
      <p>
        <strong
          style={{
            backgroundColor: "rgb(244, 244, 245)",
          }}
        >
          სამუშაო გამოცდილება:{" "}
        </strong>
      </p>
      {workExperience?.map((item: any) => {
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

export default WorkExperienceRenderList;
