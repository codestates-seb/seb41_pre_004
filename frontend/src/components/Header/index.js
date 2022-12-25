import Login from './Login';
import Logout from './Logout';
import { HeaderBlock, HeaderContainer } from '../../styles/headerStyles';

const Header = ({ islogin }) => {
  return (
    <HeaderBlock>
      <HeaderContainer>{islogin ? <Login /> : <Logout />}</HeaderContainer>
    </HeaderBlock>
  );
};

export default Header;