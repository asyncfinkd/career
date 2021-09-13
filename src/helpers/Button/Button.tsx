import React from "react";

interface Props {
  children: any;
  props?: any;
}

const Button: React.FC<Props> = ({ props, children }) => {
  return (
    <>
      <button {...props}>{children}</button>
    </>
  );
};

export default Button;
