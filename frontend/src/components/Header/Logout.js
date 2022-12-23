import { Link } from 'react-router-dom';
import { desktopLogo, mobileLogo } from '../../assets/headerIcons';
import { Desktop, Tablet, Mobile } from '../Responsive';
import Search from './Search';
import MenuButton from './MenuButton';

const Logout = () => {
  return (
    <>
      <Mobile>
        <MenuButton />
        <Link to="/">
          <strong>
            <img src={mobileLogo} alt="stackoverflow logo" />
          </strong>
        </Link>
        <button type="button" aria-label="Open the Products modal">
          Products
        </button>
        <Search />
        <Link to="/login">
          <strong>Log in</strong>
        </Link>
        <Link to="/signup">
          <strong>Sign up</strong>
        </Link>
      </Mobile>

      <Tablet>
        <Link to="/">
          <strong>
            <img src={desktopLogo} alt="stackoverflow logo" />
          </strong>
        </Link>
        <button type="button" aria-label="Open the Products modal">
          Products
        </button>
        <Search />
        <Link to="/login">
          <strong>Log in</strong>
        </Link>
        <Link to="/signup">
          <strong>Sign up</strong>
        </Link>
      </Tablet>

      <Desktop>
        <Link to="/">
          <strong>
            <img src={desktopLogo} alt="stackoverflow logo" />
          </strong>
        </Link>
        <a href="https://stackoverflow.co/" aria-label="Go to About page">
          About
        </a>
        <button type="button" aria-label="Open the Products modal">
          Products
        </button>
        <a
          href="https://stackoverflow.co/teams/"
          aria-label="Go to For Teams page"
        >
          For Teams
        </a>
        <Search />
        <Link to="/login">
          <strong>Log in</strong>
        </Link>
        <Link to="/signup">
          <strong>Sign up</strong>
        </Link>
      </Desktop>
    </>
  );
};

export default Logout;
