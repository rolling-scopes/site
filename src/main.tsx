import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import '@/shared/dayjs';

import '@/app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
