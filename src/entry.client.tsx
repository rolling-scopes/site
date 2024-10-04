import React from 'react';
import ReactDOM from 'react-dom/client';
import { HydratedRouter } from 'react-router';
import '@/shared/helpers/dayJS';
import { routes } from './app/routes';

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <HydratedRouter routes={routes} />
  </React.StrictMode>,
);
