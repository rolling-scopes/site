import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import './app.scss';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} data-testid="router-provider" />
    </div>
  );
}

export default App;
