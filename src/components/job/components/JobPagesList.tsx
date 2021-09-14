import React from "react";
import RequirementsList from "../RequirementsList";

const JobPagesList: React.FC<any> = ({ description, lastTime }: any) => {
  return (
    <>
      <RequirementsList description={description} lastTime={lastTime} />
    </>
  );
};

export default JobPagesList;
