import { Link } from 'react-router-dom';
import mobileLogo from '../../../assets/icons/mobileLogo.svg';
import { ReactComponent as InboxIcon } from '../../../assets/icons/inboxIcon.svg';
import { ReactComponent as TrophyIcon } from '../../../assets/icons/trophyIcon.svg';
import { ReactComponent as HelpIcon } from '../../../assets/icons/helpIcon.svg';
import { ReactComponent as SnowIcon } from '../../../assets/icons/snowIcon.svg';
import Search from '../Search';
import NavButton from '../NavButton';
import ListButton from '../ListButton';
import {
  MobileFlexBlock,
  LeftBlock,
  RightBlock,
  MobileLogo,
  MobileProductsButton,
  HoverButton,
  MyPageButton,
} from '../../../styles/headerStyles';

const Login = () => {
  return (
    <MobileFlexBlock>
      <LeftBlock>
        <NavButton isOpen={false} />
        <Link to="/">
          <MobileLogo>
            <img src={mobileLogo} alt="stackoverflow logo" />
          </MobileLogo>
        </Link>
        <MobileProductsButton
          type="button"
          aria-label="Open the Products modal"
        >
          Products
        </MobileProductsButton>
      </LeftBlock>

      <RightBlock>
        <Search />
        <Link to="/mypage" aria-label="Go to MyPage">
          <MyPageButton>
            <img
              src="https://avatars.githubusercontent.com/u/106383277?v=4"
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
      </RightBlock>
    </MobileFlexBlock>
  );
};

export default Login;