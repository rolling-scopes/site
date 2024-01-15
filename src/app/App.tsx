import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, CoursesPage, NodejsPage } from '@/pages';
import { BaseLayout } from './BaseLayout';
import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
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
