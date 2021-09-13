import React from "react";

interface Props {
  value: string;
  onChange: (e: any) => void;
  props?: object;
}

const Input: React.FC<Props> = ({ props, value, onChange }) => {
  return (
    <>
      <input {...props} value={value} onChange={onChange} />
    </>
  );
};

export default Input;
