import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CounterProvider } from './context/Counter';
import { SideProvider } from './context/Sides';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideProvider>
      <App />
    </SideProvider>
  </React.StrictMode>
);

reportWebVitals();
