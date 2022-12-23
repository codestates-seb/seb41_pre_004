import { Link } from 'react-router-dom';
import {
  desktopLogo,
  mobileLogo,
  inboxIcon,
  trophyIcon,
  helpIcon,
  snowIcon,
} from '../../assets/headerIcons';
import { Desktop, Tablet, Mobile } from '../Responsive';
import Search from './Search';
import MenuButton from './MenuButton';
import ListButton from './ListButton';

const Login = () => {
  return (
    <>
      <Desktop>
        <Link to="/">
          <strong>
            <img src={desktopLogo} alt="stackoverflow logo" />
          </strong>
        </Link>
        <button type="button" aria-label="Open the Products modal">
          Products
        </button>
        <Search />
        <Link to="/mypage" aria-label="Go to MyPage">
          <img
            src="https://avatars.githubusercontent.com/u/106383277?v=4"
            alt="user"
          />
        </Link>
        <button type="button" title="Recent inbox messages">
          <img src={inboxIcon} alt="" />
        </button>
        <button
          type="button"
          title="Recent achievements: reputation, badges, and privileges earned"
        >
          <img src={trophyIcon} alt="" />
        </button>
        <button type="button" title="Help Center and other resources">
          <img src={helpIcon} alt="" />
        </button>
        <button type="button" title="Winter Bash">
          <img src={snowIcon} alt="" />
        </button>
        <ListButton />
      </Desktop>

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
        <Link to="/mypage" aria-label="Go to MyPage">
          <img
            src="https://avatars.githubusercontent.com/u/106383277?v=4"
            alt="user"
          />
        </Link>
        <button type="button" title="Recent inbox messages">
          <img src={inboxIcon} alt="" />
        </button>
        <button
          type="button"
          title="Recent achievements: reputation, badges, and privileges earned"
        >
          <img src={trophyIcon} alt="" />
        </button>
        <button type="button" title="Help Center and other resources">
          <img src={helpIcon} alt="" />
        </button>
        <button type="button" title="Winter Bash">
          <img src={snowIcon} alt="" />
        </button>
        <ListButton />
      </Tablet>

      <Mobile>
        <MenuButton isOpen={false} />
        <Link to="/">
          <strong>
            <img src={mobileLogo} alt="stackoverflow logo" />
          </strong>
        </Link>
        <button type="button" aria-label="Open the Products modal">
          Products
        </button>
        <Search />
        <Link to="/mypage" aria-label="Go to MyPage">
          <img
            src="https://avatars.githubusercontent.com/u/106383277?v=4"
            alt="user"
          />
        </Link>
        <button type="button" title="Recent inbox messages">
          <img src={inboxIcon} alt="" />
        </button>
        <button
          type="button"
          title="Recent achievements: reputation, badges, and privileges earned"
        >
          <img src={trophyIcon} alt="" />
        </button>
        <button type="button" title="Help Center and other resources">
          <img src={helpIcon} alt="" />
        </button>
        <button type="button" title="Winter Bash">
          <img src={snowIcon} alt="" />
        </button>
        <ListButton />
      </Mobile>
    </>
  );
};

export default Login;
