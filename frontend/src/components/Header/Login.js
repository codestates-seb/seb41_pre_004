import { Desktop, Tablet, Mobile } from '../Responsive';
import MobileLogin from './Mobile/Login';
import TabletLogin from './Tablet/Login';
import DesktopLogin from './Desktop/Login';

const Login = () => {
  return (
    <>
      <Mobile>
        <MobileLogin />
      </Mobile>

      <Tablet>
        <TabletLogin />
      </Tablet>

      <Desktop>
        <DesktopLogin />
      </Desktop>
    </>
  );
};

export default Login;
