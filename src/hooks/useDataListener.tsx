import React from "react";

interface Props {
  condition?: any;
  children?: any;
}

const UseDataListener: React.FC<Props> = ({ condition, children }) => {
  return <>{condition ? null : children}</>;
};

export default UseDataListener;
