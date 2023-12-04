import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routeConfig } from '../../config/routeConfig';

const router = createBrowserRouter(routeConfig);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
