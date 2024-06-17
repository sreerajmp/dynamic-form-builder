// src/contexts/FormContext.js
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [fields, setFields] = useState([{type:'text', label: '', options: []}]);

  const addField = (field) => {
    console.log("field",field,fields);
    setFields([...fields, field]);
  };

  const updateField = (index, updatedField) => {
    const newFields = fields.map((field, i) => (i === index ? updatedField : field));
    setFields(newFields);
  };

  const removeField = (index) => {
    const newFields = fields.filter((field, i) => i !== index);
    setFields(newFields);
  };

  return (
    <FormContext.Provider value={{ fields, addField, updateField, removeField }}>
      {children}
    </FormContext.Provider>
  );
};
