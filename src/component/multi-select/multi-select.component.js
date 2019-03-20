import React from "react";

const MultiSelect = ({ size, defaultValue, onChange, optionList = [] }) => {
  const rennderOptionList = () => {
    return optionList.map(option => <option value={option}>1 {option}</option>);
  };
  return (
    <select
      size={size}
      multiple
      defaultValue={[defaultValue]}
      onChange={e => onChange(e.target.value)}
    >
      {rennderOptionList()}
    </select>
  );
};

export default MultiSelect;
