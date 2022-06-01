import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erreur from './Erreur';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/:id' element={<App />}/>
        <Route path='*' element={<Erreur />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);