import React from "react";
import FormValidation from "./components/FormValidation";

const Form: React.FC<any> = () => {
  return (
    <>
      <div
        id="apply"
        className="md:w-5/12-1 p-4 sm:p-6 border-t-2 md:border-0 max-w-full"
      >
        <div className="">
          <FormValidation />
        </div>
      </div>
    </>
  );
};

export default Form;