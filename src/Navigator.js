import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';

export default function Navigator() {
    return (<>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} /> 
      </Routes>
    </Router>
    </>)
}