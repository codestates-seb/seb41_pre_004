import { Mobile, Tablet, Desktop } from '../Responsive';
import MobileFooter from './Mobile';
import TabletFooter from './Tablet';
import DesktopFooter from './Desktop';

const Footer = () => {
  return (
    <>
      <Mobile>
        <MobileFooter />
      </Mobile>

      <Tablet>
        <TabletFooter />
      </Tablet>

      <Desktop>
        <DesktopFooter />
      </Desktop>
    </>
  );
};

export default Footer;
