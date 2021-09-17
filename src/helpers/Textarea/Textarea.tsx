import React from "react";

interface Props {
  value?: any;
  onChange?: any;
  props?: any;
  children?: any;
}

const Textarea: React.FC<Props> = ({ value, onChange, props, children }) => {
  return (
    <>
      <textarea value={value} onChange={onChange} {...props}>
        {children}
      </textarea>
    </>
  );
};

export default Textarea;
