import { Link } from 'react-router-dom';
import { desktopLogo } from '../../../assets/headerIcons';
import Search from '../Search';
import {
  FlexBlock,
  Logo,
  MenuButton,
  ProductsButton,
  LoginButton,
  SignupButton,
} from '../../../styles/headerStyles';

const Logout = () => {
  return (
    <FlexBlock>
      <Link to="/">
        <Logo>
          <img src={desktopLogo} alt="stackoverflow logo" />
        </Logo>
      </Link>
      <MenuButton
        as="a"
        href="https://stackoverflow.co/"
        aria-label="Go to About page"
      >
        About
      </MenuButton>
      <ProductsButton type="button" aria-label="Open the Products modal">
        Products
      </ProductsButton>
      <MenuButton
        as="a"
        href="https://stackoverflow.co/teams/"
        aria-label="Go to For Teams page"
      >
        For Teams
      </MenuButton>
      <Search />
      <Link to="/login">
        <LoginButton>Log in</LoginButton>
      </Link>
      <Link to="/signup">
        <SignupButton>Sign up</SignupButton>
      </Link>
    </FlexBlock>
  );
};

export default Logout;
