// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormProvider } from './contexts/FormContext';
import FormBuilder from './components/FormBuilder';
import FormHistory from './components/FormHistory';
import './styles.css';

const App = () => {
  return (
    <Router>
      <FormProvider>
        <Routes>
          <Route path="/" element={<FormBuilder />} />
          <Route path="/history" element={<FormHistory />} />
        </Routes>
      </FormProvider>
    </Router>
  );
};

export default App;
