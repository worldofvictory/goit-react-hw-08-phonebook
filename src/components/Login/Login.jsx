import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/aute/operations';
import { Link } from 'react-router-dom';
import css from './Login.module.css'


export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;

        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset();
    }

    return (
        <div className={css.div}>
            <p className={css.title}>Login</p>
            <form onSubmit={handleSubmit} autoComplete='off' className={css.form}>
                <div>
                    <label htmlFor="email">Email                               </label>
                    <input className={css.input} type="email" name="email" placeholder=" Email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className={css.input} type="password" name="password" placeholder=" Password" required />
                </div>
                <button className={css.btn} type='submit'>Login</button>
                <p>
                    Don't have an account? 
                    <Link to='/register'>
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    )
}