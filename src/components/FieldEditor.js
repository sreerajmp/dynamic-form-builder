// src/components/FieldEditor.js
import React from 'react';

const FieldEditor = ({ field, onChange }) => {
  const handleLabelChange = (e) => {
    onChange({ ...field, label: e.target.value });
  };

  const handleOptionsChange = (e, index) => {
    const newOptions = field.options.map((option, i) => (i === index ? e.target.value : option));
    onChange({ ...field, options: newOptions });
  };

  const addOption = () => {
    onChange({ ...field, options: [...field.options, ''] });
  };

  return (
    <div className="field-editor">
      <input
        type="text"
        className="field-label"
        placeholder="Label"
        value={field.label}
        onChange={handleLabelChange}
      />
      {(field.type === 'radio' || field.type === 'checkbox' || field.type === 'dropdown') && (
        <div className="options">
          {field.options.map((option, index) => (
            <input
              key={index}
              type="text"
              className="field-option"
              placeholder="Option"
              value={option}
              onChange={(e) => handleOptionsChange(e, index)}
            />
          ))}
          <button onClick={addOption} className="add-option">Add Option</button>
        </div>
      )}
    </div>
  );
};

export default FieldEditor;
