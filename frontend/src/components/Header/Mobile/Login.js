import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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
} from '../../../styles/headerStyle';

const Login = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menuOpen);

  const onToggle = () => {
    dispatch({ type: 'TOGGLEMENU', value: isOpen });
  };

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
        >
          Products
        </MobileProductsButton>
      </LeftBlock>

      <RightBlock>
        <Search />
        <Link
          to="/mypage"
          aria-label="Go to MyPage"
          onClick={() => dispatch({ type: 'ACTIVETAB', value: null })}
        >
          <MyPageButton onClick={onToggle}>
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
      </RightBlock>
    </MobileFlexBlock>
  );
};

export default Login;
