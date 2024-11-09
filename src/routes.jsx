import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';

const routes = [
  {
    path: '/',
    element: <Home />,
    exact: true, // Only matches if the path is exactly '/'
  },
  {
    path: '/directors',
    element: <Directors/>,
  },
  {
    path: '/actors',
    element: <Actors/>,
  },
  {
    path: '/movie/:id', // The `id` parameter is included here
    element: <Movie/>,
  }
];

export default routes;