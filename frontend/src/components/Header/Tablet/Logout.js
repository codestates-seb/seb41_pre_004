import { Link } from 'react-router-dom';
import desktopLogo from '../../../assets/icons/desktopLogo.svg';
import Search from '../Search';
import {
  LoginButton,
  SignupButton,
  FlexBlock,
  Logo,
  ProductsButton,
} from '../../../styles/headerStyle';

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
      <Link to="/users/login">
        <LoginButton>Log in</LoginButton>
      </Link>
      <Link to="/users/signup">
        <SignupButton>Sign up</SignupButton>
      </Link>
    </FlexBlock>
  );
};

export default Logout;
