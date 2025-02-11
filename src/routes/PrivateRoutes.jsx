import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selector.js';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../helpers/constants/ROUTES.js';

const PrivateRoutes = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        return children;
    }
    return <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoutes;
