import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CoursesPage, Home, NodeJS } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/rs-courses',
    element: <CoursesPage />
  },
  {
    path: '/nodejs-course',
    element: <NodeJS />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
