import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuteNav } from '../AuteNav/AuteNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/aute/selectors';
import css from './AppBar.module.css';

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuteNav />}
        </header>
    );
};