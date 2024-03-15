import React from 'react';
import ReactDOM from 'react-dom/client';
import AppStore from './context/AppStore';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './routes/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppStore><App /></AppStore>
  </React.StrictMode>,
);
