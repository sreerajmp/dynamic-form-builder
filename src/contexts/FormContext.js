// src/contexts/FormContext.js
import React, { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [fields, setFields] = useState([]);
  const [history, setHistory] = useState([]);

  const addField = (field) => {
    setFields([...fields, field]);
    setHistory([...history, fields]);
  };

  const updateField = (index, updatedField) => {
    const newFields = fields.map((field, i) => (i === index ? updatedField : field));
    setFields(newFields);
    setHistory([...history, newFields]);
  };

  const value = {
    fields,
    addField,
    updateField,
    history,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export { FormContext, FormProvider };
