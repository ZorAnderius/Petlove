import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selector.js';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../helpers/constants/ROUTES.js';

const PublicRoutes = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  if (isLoggedIn) {
    return <Navigate to={location?.state ?? ROUTES.PROFILE} />;
  }
  return children;
};

export default PublicRoutes;
