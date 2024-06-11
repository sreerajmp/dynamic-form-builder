// src/components/FormHistory.js
import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

const FormHistory = () => {
  const { history, fields } = useContext(FormContext);

  const restoreVersion = (versionIndex) => {
    fields.setFields(history[versionIndex]);
  };

  return (
    <div className="form-history">
      <h3>Form History</h3>
      {history.map((version, index) => (
        <div key={index} className="history-item">
          <span>Version {index + 1}</span>
          <button onClick={() => restoreVersion(index)}>Restore</button>
        </div>
      ))}
    </div>
  );
};

export default FormHistory;
