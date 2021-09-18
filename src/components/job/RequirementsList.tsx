import React from "react";
import dompurify from "dompurify";
import FunctionsRenderList from "./components/FunctionsRenderList";
import QualificationRequireRender from "./components/QualitificationRequireRender";
import WorkExperienceRenderList from "./components/WorkExperienceRenderList";
import KnowRenderList from "./components/KnowRenderList";
import SalaryRender from "./components/SalaryRender";

const RequirementsList: React.FC<any> = ({ description, lastTime }: any) => {
  const sanitizer = dompurify.sanitize;
  return (
    <>
      {description?.map((item: any) => {
        const {
          title,
          qualitificationRequire,
          know,
          functions,
          workExperience,
          salary,
        } = item;
        return (
          <>
            <div role="article" className="ql-editor py-6 hh-job-description">
              <p
                className="ql-align-justify"
                style={{ fontFamily: "MarkGEO" }}
                dangerouslySetInnerHTML={{
                  __html: sanitizer(title),
                }}
              ></p>
              {functions.length != 0 && (
                <FunctionsRenderList list={functions} />
              )}
              {qualitificationRequire != "" && (
                <QualificationRequireRender
                  qualitificationRequire={qualitificationRequire}
                />
              )}
              {workExperience.length != 0 && (
                <WorkExperienceRenderList workExperience={workExperience} />
              )}
              {salary != "" && (
                <>
                  <SalaryRender salary={salary} />
                </>
              )}
              {know.length != 0 && <KnowRenderList know={know} />}
              <p>
                <br />
              </p>
              <p style={{ fontFamily: "MarkGEO" }}>
                <span style={{ color: "rgb(91, 91, 91)" }}>
                  დაინტერესების შემთხვევაში გთხოვთ, შეავსეთ მოთხოვნილი
                  ინფორმაცია, ატვირთეთ რეზიუმე/CV და დააჭირეთ ღილაკს
                  „გამოაგზავნეთ განაცხადი“. რეზიუმეების მიღების ბოლო ვადაა{" "}
                </span>
                <strong style={{ color: "rgb(91, 91, 91)" }}>
                  &nbsp;{lastTime}
                </strong>
                <span style={{ color: "rgb(91, 91, 91)" }}>.</span>
              </p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default RequirementsList;
