import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Courses, Nodejs } from '@/pages';
import { BaseLayout } from '@/features/base-layout';
import { JavaScript } from '@/pages/javascript';
import { Angular } from '@/pages/angular';
import './app.scss';
import { AwsDeveloper } from '@/pages/aws-developer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <Courses /> },
      { path: 'nodejs-course', element: <Nodejs /> },
      { path: 'javascript-mentoring-program', element: <JavaScript type="Mentoring Program" /> },
      { path: 'javascript-preschool', element: <JavaScript type="Pre-school" /> },
      { path: 'angular-course', element: <Angular /> },
      { path: 'aws-cloud-developer-course', element: <AwsDeveloper /> }
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
