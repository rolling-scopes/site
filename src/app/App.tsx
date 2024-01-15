import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { HomePage, CoursesPage, NodejsPage } from '@/pages';
import { ScrollToHashElement } from './components/ScrollToHash';
import { Navbar } from '@/shared/UI';
import './App.scss';

const Layout = () => (
  <>
    <ScrollToHashElement />
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'courses', element: <CoursesPage /> },
      { path: 'nodejs-course', element: <NodejsPage /> }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
