import { Link } from 'react-router-dom';
import mobileLogo from '../../../assets/icons/mobileLogo.svg';
import Search from '../Search';
import NavButton from '../NavButton';
import {
  MobileFlexBlock,
  LeftBlock,
  RightBlock,
  MobileLogo,
  MobileProductsButton,
  LoginButton,
  SignupButton,
} from '../../../styles/headerStyle';

const Logout = () => {
  return (
    <MobileFlexBlock>
      <LeftBlock>
        <NavButton />
        <Link to="/">
          <MobileLogo>
            <img src={mobileLogo} alt="stackoverflow logo" />
          </MobileLogo>
        </Link>
        <MobileProductsButton
          type="button"
          aria-label="Open the Products modal"
          selected={false}
        >
          Products
        </MobileProductsButton>
      </LeftBlock>
      <RightBlock>
        <Search />
        <Link to="/login">
          <LoginButton>Log in</LoginButton>
        </Link>
        <Link to="/signup">
          <SignupButton>Sign up</SignupButton>
        </Link>
      </RightBlock>
    </MobileFlexBlock>
  );
};

export default Logout;
