import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import '@/app/services/dayjs';

import '@/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
