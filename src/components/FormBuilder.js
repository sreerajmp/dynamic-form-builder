// src/components/FormBuilder.js
import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from '../contexts/FormContext';
import FieldEditor from './FieldEditor';
import { Link } from 'react-router-dom';
import FieldTypeDropdown from './FieldTypeDropdown';

const FormBuilder = () => {
  const { fields, addField, updateField, removeField } = useContext(FormContext);
  const [currentField, setCurrentField] = useState(0);
  const [formName, setFormName] = useState(localStorage.getItem('formName') || '');
  const [formDescription, setFormDescription] = useState(localStorage.getItem('formDescription') || '');
  const handleAddField = (type) => {
    const newField = { type, label: '', options: [] };
    setCurrentField(fields.length);
    addField(newField);
  };

  const handleFieldChange = (index, field) => {
    console.log("handleFieldChange:",index);
    updateField(index, field);
  };
  useEffect(() => {
    localStorage.setItem('formName',formName)
}, [formName])
useEffect(() => {
  localStorage.setItem('formDescription',formDescription)
}, [formDescription])
  useEffect(() => {
      handleAddField('text')
  }, [])
  const handleCancelField = () => {
    if(currentField!=0){
      removeField(currentField);
      setCurrentField(null);
    }
  };

  return (
    <div className="form-builder">
      <div className="form-header">
  
    <input
      type="text"
      placeholder="Form Name"
      value={formName}
      className='h1-input'
      onChange={(e)=>setFormName(e.target.value)}
    />
  <textarea
    placeholder="Form Description"
    value={formDescription}
    onChange={(e)=>setFormDescription(e.target.value)}
  />
</div>
      

      <div className="form-actions">
          <Link to="/preview">
            <button className="preview-button">Preview Form</button>
          </Link>
        </div>
      <div className="form-controller" >
        {fields.map((field, index) => (
          <div key={index} className="field-editors" onClick={() => setCurrentField(index)}>
            <FieldEditor
              field={field}
              onChange={(updatedField) => handleFieldChange(index, updatedField)}
              isEditing={index === currentField}
              onConfirm={() => handleAddField('text')}
              onCancel={handleCancelField}
            />
            <div  className="field-controls">
              <FieldTypeDropdown onSelect={(type)=>handleFieldChange(index,{ type, label: '', options: [] })} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
