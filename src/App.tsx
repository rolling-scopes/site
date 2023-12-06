import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CoursesPage, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/rs-courses',
    element: <CoursesPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
