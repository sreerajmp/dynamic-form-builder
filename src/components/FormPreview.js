// src/components/FormPreview.js
import React, { useState } from 'react';
import FieldPreview from './FieldPreview';

const FormPreview = ({ fields }) => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    localStorage.setItem('formData', JSON.stringify(formValues));
    alert('Form data saved successfully!');
  };

  return (
    <div className="form-preview">
      <h2>Form Preview</h2>
      {fields.map((field, index) => (
        <FieldPreview
          key={index}
          field={field}
          onChange={(value) => handleInputChange(field.label, value)}
        />
      ))}
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default FormPreview;
