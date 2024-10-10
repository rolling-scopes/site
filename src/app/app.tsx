import NextTopLoader from 'nextjs-toploader';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

import './app.scss';

const router = createBrowserRouter(routes);

function App() {
  // If we are on https://rollingscopes.com/, a redirect to https://rs.school/ is triggered.
  if (window.location.hostname.includes('rollingscopes.com')) {
    window.location.href = 'https://rs.school';
  }

  return (
    <div className="app-styles">
      <NextTopLoader
        color="black"
        initialPosition={0.0001}
        crawl={false}
        easing="ease-in-out"
        showSpinner={false}
        speed={300}
      />
      <RouterProvider router={router} data-testid="router-provider" />
    </div>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
