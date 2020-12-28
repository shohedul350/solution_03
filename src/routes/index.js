import userRoutesConfigure from './userRoutes';
import bookRoutesConfigure from './bookRoutes';

const configureAllRoutes = (app) => {
  userRoutesConfigure(app);
  bookRoutesConfigure(app);
};

export default configureAllRoutes;
