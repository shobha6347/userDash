import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { FontSizeProvider } from './Context/FontSizeContext.jsx';
import './i18n.js'; // Ensure the correct file extension

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FontSizeProvider>
      <App />
    </FontSizeProvider>
  </StrictMode>
);

