import Login from './Login';
import Logout from './Logout';
import { HeaderBlock, HeaderContainer } from '../../styles/headerStyle';

const Header = () => {
  const isLogin = localStorage.getItem('token');
  
  return (
    <HeaderBlock>
      <HeaderContainer>{isLogin ? <Login /> : <Logout />}</HeaderContainer>
    </HeaderBlock>
  );
};

export default Header;
