// src/components/FieldEditor.js
import React, { useState } from 'react';

const FieldEditor = ({ field, onChange, isEditing, onConfirm, onCancel }) => {
  const [optionsError, setOptionsError] = useState(false);

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

  const validateField = () => {
    if (
      (field.type === 'radio' || field.type === 'checkbox' || field.type === 'dropdown') &&
      field.options.length === 0
    ) {
      alert("At least one option is mandatory for this field type");
      setOptionsError(true);
      return false;
    }

    setOptionsError(false);
    return true;
  };

  const handleConfirm = () => {
    if (validateField()) {
      onConfirm();
    }
  };

  return (
    <div className="field-editor">
      <input
        type="text"
        className="field-label"
        placeholder="Add your question"
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
          {optionsError && <span className="error-message">At least one option is mandatory</span>}
        </div>
      )}
      <div className="field-preview">
        {field.type === 'text' && <input type="text" className="preview-input" placeholder={'Short answer text'} readOnly />}
        {field.type === 'textarea' && <textarea className="preview-textarea" placeholder={'Long answer text'} readOnly />}
        {field.type === 'radio' && (
          <div className="preview-options">
            {field.options.map((option, index) => (
              <div key={index} className="preview-option">
                <input type="radio" name={field.label} disabled />
                <label>{option}</label>
              </div>
            ))}
          </div>
        )}
        {field.type === 'checkbox' && (
          <div className="preview-options">
            {field.options.map((option, index) => (
              <div key={index} className="preview-option">
                <input type="checkbox" disabled />
                <label>{option}</label>
              </div>
            ))}
          </div>
        )}
        {field.type === 'dropdown' && (
          <select className="preview-select" disabled>
            {field.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="field-buttons">
        <button className="confirm-button" onClick={handleConfirm}>
          ✓
        </button>
        <button className="cancel-button" onClick={onCancel}>
          ✗
        </button>
      </div>
    </div>
  );
};

export default FieldEditor;
