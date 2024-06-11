// src/components/FieldPreview.js
import React from 'react';

const FieldPreview = ({ field, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="field-preview">
      <label className="field-label">{field.label}</label>
      {field.type === 'text' && (
        <input type="text" className="preview-input" onChange={handleChange} />
      )}
      {field.type === 'textarea' && (
        <textarea className="preview-textarea" onChange={handleChange} />
      )}
      {field.type === 'radio' && (
        <div className="preview-options">
          {field.options.map((option, index) => (
            <div key={index} className="preview-option">
              <input
                type="radio"
                name={field.label}
                value={option}
                onChange={handleChange}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}
      {field.type === 'checkbox' && (
        <div className="preview-options">
          {field.options.map((option, index) => (
            <div key={index} className="preview-option">
              <input
                type="checkbox"
                value={option}
                onChange={(e) =>
                  handleChange({
                    target: {
                      value: e.target.checked ? option : '',
                    },
                  })
                }
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}
      {field.type === 'dropdown' && (
        <select className="preview-select" onChange={handleChange}>
          {field.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FieldPreview;
