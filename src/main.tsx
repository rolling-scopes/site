import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

import '@/shared/helpers/dayJS';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '@/app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
