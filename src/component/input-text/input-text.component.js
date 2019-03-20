import React from "react";

const InputText = ({ onChange, date }) => (
  <input
    type="date"
    defaultValue={date}
    onChange={e => {
      onChange(e.target.value);
    }}
  />
);

export default InputText;
