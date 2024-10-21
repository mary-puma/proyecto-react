import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {App} from './App';
import {AuthProvider} from '../src/auth/context/AuthProvider'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <App />
    </AuthProvider>
   
    </BrowserRouter>

  </React.StrictMode>
)

reportWebVitals();
