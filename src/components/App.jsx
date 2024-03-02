import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const Welcome = lazy(() =>
  import('components/Auth/Welcome/Welcome')
);

const Register = lazy(() =>
  import('components/Auth/RegisterForm/RegisterForm')
);
const Login = lazy(() => import('components/Auth/LoginForm/LoginForm'));
// const Sidebar = lazy(() => import('components/sidebarComponents/Sidebar/Sidebar'))
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />}>
          <Route index element={<Welcome />} />
          <Route path="/auth/*" element={<AuthPage />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>

          

        </Route>
      </Routes>
    </>
  );
};
