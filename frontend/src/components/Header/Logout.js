import { Desktop, Tablet, Mobile } from '../Responsive';
import MobileLogout from './Mobile/Logout';
import TabletLogout from './Tablet/Logout';
import DesktopLogout from './Desktop/Logout';

const Logout = () => {
  return (
    <>
      <Mobile>
        <MobileLogout />
      </Mobile>

      <Tablet>
        <TabletLogout />
      </Tablet>

      <Desktop>
        <DesktopLogout />
      </Desktop>
    </>
  );
};

export default Logout;
