import React from "react";

const WorkExperienceRenderList: React.FC<any> = ({ workExperience }: any) => {
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
          სამუშაო გამოცდილება:{" "}
        </strong>
        {workExperience.length == 1 && <>{workExperience[0].title}</>}
      </p>
      {workExperience.length != 1 && (
        <>
          {workExperience?.map((item: any) => {
            return (
              <>
                <p
                  style={{
                    fontFamily: "MarkGEO",
                  }}
                >
                  ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {item.title}
                </p>
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export default WorkExperienceRenderList;
