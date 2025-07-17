import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Room from './pages/Room';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/:type/:id', element: <Room /> },
  { path: '*', element: <NotFound /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
