import { Link } from "react-router-dom";
import css from './AuteNav.module.css';

export const AuteNav = () => {
    return (
        <div>
            <Link className={css.link} to="/register">
                Register
            </Link>
            <Link className={css.link} to="/login">
                Login
            </Link>
        </div>
    )
}