import { useDispatch } from "react-redux";
import { register } from '../../redux/aute/operations';
import { Link } from "react-router-dom";
import css from './RegisterForm.module.css';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;

        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset();
    }
    return (
        <div className={css.div}>
            <p className={css.title}>Register Form</p>
            <form onSubmit={handleSubmit} autoComplete='off' className={css.form}>
                <div>
                    <span className={css.text}>Username</span>
                    <input className={css.input} type="text" name="name" placeholder=" Username" required />
                </div>
                <div>
                    <span className={css.text}>Email</span>
                    <input className={css.input} type="email" name="email" placeholder=" user@mail.com" required />
                </div>
                <div>
                    <span className={css.text}>Password</span>
                    <input className={css.input} type="password" name="password" placeholder=" Password" required />
                </div>
                <button className={css.btn} type='submit'>Sign in</button>
                <p className={css.text}>
                    Have an account? 
                    <Link className={css.link} to='/register'>Sign up</Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterForm;