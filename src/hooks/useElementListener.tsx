import React from "react";

interface Props {
  condition?: any;
  children?: any;
}

const UseElementListener: React.FC<Props> = ({ condition, children }) => {
  return <>{condition ? null : children}</>;
};

export default UseElementListener;
