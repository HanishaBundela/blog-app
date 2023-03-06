import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
       <App />
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
