import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Courses, Nodejs } from '@/pages';
import { BaseLayout } from '../features/base-layout';
import './app.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <Courses /> },
      { path: 'nodejs-course', element: <Nodejs /> }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} data-testid="router-provider" />
    </div>
  );
}

export default App;
