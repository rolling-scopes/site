import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage, CoursesPage, NodejsPage } from '@/pages';
import { Navbar } from '@/shared/UI';
import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/courses',
    element: <CoursesPage />
  },
  {
    path: '/nodejs-course',
    element: <NodejsPage />
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
