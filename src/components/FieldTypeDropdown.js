// src/components/FieldTypeDropdown.js
import React from 'react';

const FieldTypeDropdown = ({ onSelect }) => {
  const handleSelect = (e) => {
    const fieldType = e.target.value;
    if (fieldType) {
      onSelect(fieldType);
    }
  };

  return (
    <div className="field-type-dropdown">
      <select onChange={handleSelect}>
        <option value="">Select Field Type</option>
        <option value="text">Text Field</option>
        <option value="textarea">Text Area</option>
        <option value="radio">Radio Buttons</option>
        <option value="checkbox">Checkboxes</option>
        <option value="dropdown">Dropdown</option>
      </select>
    </div>
  );
};

export default FieldTypeDropdown;
