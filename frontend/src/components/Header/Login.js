import { Desktop, Tablet, Mobile } from '../Responsive';
import MobileLogin from './Mobile/Login';
import TabletLogin from './Tablet/Login';
import DesktopLogin from './Desktop/Login';

const Login = ({homeData}) => {
  return (
    <>
      <Mobile>
        <MobileLogin homeData={homeData}/>
      </Mobile>

      <Tablet>
        <TabletLogin homeData={homeData}/>
      </Tablet>

      <Desktop>
        <DesktopLogin homeData={homeData}/>
      </Desktop>
    </>
  );
};

export default Login;
