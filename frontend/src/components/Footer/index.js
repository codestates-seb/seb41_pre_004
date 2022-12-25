import { Mobile, Tablet, Desktop } from '../Responsive';
import MobileFooter from './Mobile';
import TabletFooter from './Tablet';
import DesktopFooter from './Desktop';
import { FooterWrapper } from '../../styles/footerStyle';

const Footer = () => {
  return (
    <FooterWrapper>
      <Mobile>
        <MobileFooter />
      </Mobile>

      <Tablet>
        <TabletFooter />
      </Tablet>

      <Desktop>
        <DesktopFooter />
      </Desktop>
    </FooterWrapper>
  );
};

export default Footer;
