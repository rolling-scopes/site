import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Courses, Nodejs } from '@/pages';
import { BaseLayout } from './Layouts';
import './App.scss';

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
