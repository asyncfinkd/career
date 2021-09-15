import React from "react";

interface Props {
  value: any;
  onChange: any;
  props?: any;
  children: any;
}

const Select: React.FC<Props> = ({ value, onChange, props, children }) => {
  return (
    <>
      <select value={value} onChange={onChange} {...props}>
        {children}
      </select>
    </>
  );
};

export default Select;
