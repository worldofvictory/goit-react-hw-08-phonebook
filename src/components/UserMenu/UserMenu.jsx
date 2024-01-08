import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/aute/operations";
import { selectUser } from '../../redux/aute/selectors';



export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = () => dispatch(logOut());

    return (
        <div>
            <p>{user.name}</p>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}