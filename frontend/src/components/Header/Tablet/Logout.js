import { Link } from 'react-router-dom';
import desktopLogo from '../../../assets/icons/desktopLogo.svg';
import Search from '../Search';
import {
  LoginButton,
  SignupButton,
  FlexBlock,
  Logo,
  ProductsButton,
} from '../../../styles/headerStyles';

const Logout = () => {
  return (
    <FlexBlock>
      <Link to="/">
        <Logo>
          <img src={desktopLogo} alt="stackoverflow logo" />
        </Logo>
      </Link>
      <ProductsButton type="button" aria-label="Open the Products modal">
        Products
      </ProductsButton>
      <Search />
      <LoginButton to="/login">
        <strong>Log in</strong>
      </LoginButton>
      <SignupButton to="/signup">
        <strong>Sign up</strong>
      </SignupButton>
    </FlexBlock>
  );
};

export default Logout;
