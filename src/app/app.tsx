import NextTopLoader from 'nextjs-toploader';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

import './app.scss';

const router = createBrowserRouter(routes);

function App() {
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

export default App;
