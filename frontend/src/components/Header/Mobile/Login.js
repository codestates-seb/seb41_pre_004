import { Link } from 'react-router-dom';
import {
  mobileLogo,
  inboxIcon,
  trophyIcon,
  helpIcon,
  snowIcon,
} from '../../../assets/headerIcons';
import Search from '../Search';
import NavButton from '../NavButton';
import ListButton from '../ListButton';
import {
  MobileFlexBlock,
  LeftBlock,
  RightBlock,
  MobileLogo,
  ProductsButton,
  PrimaryButton,
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
        <ProductsButton type="button" aria-label="Open the Products modal">
          Products
        </ProductsButton>
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
        <PrimaryButton type="button" title="Recent inbox messages">
          <img src={inboxIcon} alt="" />
        </PrimaryButton>
        <PrimaryButton
          type="button"
          title="Recent achievements: reputation, badges, and privileges earned"
        >
          <img src={trophyIcon} alt="" />
        </PrimaryButton>
        <PrimaryButton type="button" title="Help Center and other resources">
          <img src={helpIcon} alt="" />
        </PrimaryButton>
        <PrimaryButton type="button" title="Winter Bash">
          <img src={snowIcon} alt="" />
        </PrimaryButton>
        <ListButton />
      </RightBlock>
    </MobileFlexBlock>
  );
};

export default Login;
