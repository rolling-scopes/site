import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Navbar } from '@/shared/UI';
import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
