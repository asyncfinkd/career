import React from "react";

interface Props {
  children: any;
  props: object;
}

const Button: React.FC<Props> = ({ props, children }) => {
  return (
    <>
      <button {...props}>{children}</button>
    </>
  );
};

export default Button;
