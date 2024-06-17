// src/components/FormPreview.js
import React, { useState, useContext } from 'react';
import { FormContext } from '../contexts/FormContext';
import FieldPreview from './FieldPreview';
import { Link } from 'react-router-dom';

const FormPreview = () => {
  const { fields } = useContext(FormContext);
  const [formValues, setFormValues] = useState({});

  const formName = localStorage.getItem('formName') || '';
  const formDescription = localStorage.getItem('formDescription') || '';

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
    <div className="form-builder">
      <h1>{formName}</h1>
      <h2>{formDescription}</h2>
      <div className="form-actions">
        <Link to="/">
          <button className="preview-button">Form Edit</button>
        </Link>
      </div>
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