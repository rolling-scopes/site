import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Courses, Nodejs } from '@/pages';
import { BaseLayout } from '@/features/base-layout';
import { JavaScript } from '@/pages/javascript';
import './app.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <Courses /> },
      { path: 'nodejs-course', element: <Nodejs /> },
      { path: 'javascript-mentoring-program', element: <JavaScript type="Mentoring Program" /> },
      { path: 'javascript-preschool', element: <JavaScript type="Pre-school" /> }
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
