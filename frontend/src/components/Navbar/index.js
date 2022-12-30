import { Mobile, Tablet, Desktop } from '../Responsive';
import MobileNav from './Mobile';
import TabletNav from './Tablet';
import DesktopNav from './Desktop';

const Navbar = () => {
  return (
    <>
      <Mobile>
        <MobileNav />
      </Mobile>

      <Tablet>
        <TabletNav />
      </Tablet>

      <Desktop>
        <DesktopNav />
      </Desktop>
    </>
  );
};

export default Navbar;
