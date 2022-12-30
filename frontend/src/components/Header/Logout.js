import { Desktop, Tablet, Mobile } from '../Responsive';
import MobileLogout from './Mobile/Logout';
import TabletLogout from './Tablet/Logout';
import DesktopLogout from './Desktop/Logout';

const Logout = ({homeData}) => {
  return (
    <>
      <Mobile>
        <MobileLogout homeData={homeData}/>
      </Mobile>

      <Tablet>
        <TabletLogout homeData={homeData}/>
      </Tablet>

      <Desktop>
        <DesktopLogout homeData={homeData}/>
      </Desktop>
    </>
  );
};

export default Logout;
