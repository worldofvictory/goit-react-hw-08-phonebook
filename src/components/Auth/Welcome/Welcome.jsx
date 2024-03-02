/* import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../../redux/auth/selectors';
import { useSelector } from 'react-redux'; */

import { NavLink } from 'react-router-dom';
import  avatar  from '../../../img/programmer.png';
import  sprite  from '../../../img/icons/sprite.svg';
import style from './Welcome.module.css'


export default function Welcome() {
  /* const isAuthorized = useSelector(isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
      if (isAuthorized) return navigate('/home');
    }, [navigate, isAuthorized]); */
  return (
    <div className={style.section}>

      <img src={avatar} alt="Avatar" className={style.image} />
      <div className={style.box}>
        <div className={style.iconBox}>
          <svg className={style.icon} width={18} height={24}>
            <use href={`${sprite}#logo`} />
          </svg>
        </div>
        <h1 className={style.title}>Task Pro</h1>
      </div>
      <p className={style.text}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <div className={style.linksBox}>
        <NavLink to="auth/register" className={style.register}>
          Registration
        </NavLink>
        <NavLink to="auth/login" className={style.login}>
          Log In
        </NavLink>
      </div>
    </div>
  );
}