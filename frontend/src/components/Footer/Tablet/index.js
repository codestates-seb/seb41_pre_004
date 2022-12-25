import { ReactComponent as Logo } from '../../../assets/icons/mobileLogo.svg';
import { FooterWrapper } from '../../../styles/footerStyle';

const TabletFooter = () => {
  return (
    <FooterWrapper>
      <div>
        <Logo />
      </div>
      <div>
        <div>
          <h5>Stack Overflow</h5>
          <ul>
            <li>Questions</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <h5>Products</h5>
          <ul>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h5> Stack Exchange Network</h5>
          <ul>
            <li>Technology</li>
            <li>Culture & recreation</li>
            <li>Life & arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <li>API</li>
            <li>Data</li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>Blog</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </ul>
        <p>
          Site design / logo © 2022 Stack Exchange Inc; user contributions
          licensed under CC BY-SA. rev 2022.12.21.43127
        </p>
      </div>
    </FooterWrapper>
  );
};

export default TabletFooter;
