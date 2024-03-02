/*import Wrapper from 'components/Auth/Wrapper/Wrapper';*/
import Wrapper from 'components/Auth/Wrapper/Wrapper';
import Loader from '../components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


export default function WelcomePage() {
  return (
    <Wrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
}