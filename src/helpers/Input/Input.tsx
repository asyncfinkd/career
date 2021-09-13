import React from "react";

interface Props {
  props?: any;
  value: string;
  onChange: void;
  name?: string;
}

const Input: React.FC<Props> = ({ props, value, onChange, name }) => {
  return (
    <>
      <input {...props} value={value} onChange={onChange} name={name} />
    </>
  );
};

export default Input;
