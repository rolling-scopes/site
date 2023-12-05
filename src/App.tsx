import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Courses, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/rs-courses',
    element: <Courses />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
