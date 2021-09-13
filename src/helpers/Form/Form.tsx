import React from "react";

interface Props {
  props: object;
  children: any;
}

const FormElement: React.FC<Props> = ({ props, children }) => {
  return (
    <>
      <form {...props}>{children}</form>
    </>
  );
};

export default FormElement;
