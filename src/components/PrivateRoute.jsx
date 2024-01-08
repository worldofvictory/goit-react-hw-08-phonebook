import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsRefreshing, selectIsLoggedIn } from '../redux/aute/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}