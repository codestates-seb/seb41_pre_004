import Login from './Login';
import Logout from './Logout';
import { HeaderBlock, HeaderContainer } from '../../styles/headerStyle';

const Header = ({ islogin = false }) => {
  return (
    <HeaderBlock>
      <HeaderContainer>{islogin ? <Login /> : <Logout />}</HeaderContainer>
    </HeaderBlock>
  );
};

export default Header;
