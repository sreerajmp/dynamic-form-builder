// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormProvider } from './contexts/FormContext';
import FormBuilder from './components/FormBuilder';
import './styles.css';
import FormPreview from './components/FormPreview';

const App = () => {
  return (
    <Router>
      <FormProvider>
        <Routes>
          <Route path="/" element={<FormBuilder />} />
          <Route path="/preview" element={<FormPreview />} />
        </Routes>
      </FormProvider>
    </Router>
  );
};

export default App;
