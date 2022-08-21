import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';

export default function Navigator() {
    return (<>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} /> 
        {/* any routes add after this one will not be reached */}
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>
    </>)
}