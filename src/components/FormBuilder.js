// src/components/FormBuilder.js
import React, { useContext, useState } from 'react';
import { FormContext } from '../contexts/FormContext';
import FieldEditor from './FieldEditor';
import FormPreview from './FormPreview';

const FormBuilder = () => {
  const { fields, addField, updateField } = useContext(FormContext);
  const [currentField, setCurrentField] = useState(null);

  const handleAddField = (type) => {
    const newField = { type, label: '', options: [] };
    setCurrentField(fields.length);
    addField(newField);
  };

  const handleFieldChange = (index, field) => {
    updateField(index, field);
  };

  return (
    <div className="form-builder">
      <div className="form-header">
        <h1>Form Builder</h1>
      </div>
      <div className="field-controls">
        <button onClick={() => handleAddField('text')}>Add Text Field</button>
        <button onClick={() => handleAddField('textarea')}>Add Text Area</button>
        <button onClick={() => handleAddField('radio')}>Add Radio Buttons</button>
        <button onClick={() => handleAddField('checkbox')}>Add Checkboxes</button>
        <button onClick={() => handleAddField('dropdown')}>Add Dropdown</button>
      </div>
      <div className="field-editors">
        {fields.map((field, index) => (
          <FieldEditor
            key={index}
            field={field}
            onChange={(updatedField) => handleFieldChange(index, updatedField)}
          />
        ))}
      </div>
      <FormPreview fields={fields} />
    </div>
  );
};

export default FormBuilder;
