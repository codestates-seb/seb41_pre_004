import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import desktopLogo from '../../../assets/icons/desktopLogo.svg';
import { ReactComponent as InboxIcon } from '../../../assets/icons/inboxIcon.svg';
import { ReactComponent as TrophyIcon } from '../../../assets/icons/trophyIcon.svg';
import { ReactComponent as HelpIcon } from '../../../assets/icons/helpIcon.svg';
import { ReactComponent as SnowIcon } from '../../../assets/icons/snowIcon.svg';
import Search from '../Search';
import ListButton from '../ListButton';
import {
  FlexBlock,
  Logo,
  ProductsButton,
  MyPageButton,
  HoverButton,
} from '../../../styles/headerStyle';

const Login = () => {
  const dispatch = useDispatch();

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
      <Link
        to="/mypage"
        aria-label="Go to MyPage"
        onClick={() => dispatch({ type: 'ACTIVETAB', value: null })}
      >
        <MyPageButton>
          <img
            src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
            alt="user"
          />
        </MyPageButton>
      </Link>
      <HoverButton type="button" title="Recent inbox messages">
        <InboxIcon />
      </HoverButton>
      <HoverButton
        type="button"
        title="Recent achievements: reputation, badges, and privileges earned"
      >
        <TrophyIcon />
      </HoverButton>
      <HoverButton type="button" title="Help Center and other resources">
        <HelpIcon />
      </HoverButton>
      <HoverButton type="button" title="Winter Bash">
        <SnowIcon />
      </HoverButton>
      <ListButton />
    </FlexBlock>
  );
};

export default Login;
