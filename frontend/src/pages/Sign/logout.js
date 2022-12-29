import styled from 'styled-components';
import askubuntu from '../../assets/icons/askubuntu.png';
import mathover from '../../assets/icons/mathover.png';
import serverfault from '../../assets/icons/serverfault.png';
import stackapp from '../../assets/icons/stackapp.png';
import stackExchange from '../../assets/icons/stackExchange.png';
import superuser from '../../assets/icons/superuser.png';
import stackLogo from '../../assets/icons/stackLogo.png';
import { useNavigate } from 'react-router-dom';

//로그아웃 로컬스토리지 비워주기 엑세스토큰 제거
const Buttons = styled.button`
  display: inline-block;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  letter-spacing: normal;
  padding: 10px;
  margin: 2px;
  color: white;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  border-radius: 3px;
  outline: none;
`;
const LogoutButton = styled(Buttons)`
  background-color: #0a95ff;
  color: white;
  border: 1px solid #4fabfd;
`;
const CancelButton = styled(Buttons)`
  background-color: white;
  color: #0074cc;
  border: none;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;
const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoutMessageDiv = styled.div`
  font-size: 21px;
  line-height: 27px;
  text-align: center;
  letter-spacing: normal;
  margin-bottom: 24px;
  color: #232629;
`;
const LogoutCatalog = styled.div`
  width: 100%;
  max-width: 316px;
  margin-bottom: 24px;
  padding: 24px;
  letter-spacing: normal;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
    rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  border-radius: 7px;
`;
const LogoutForm = styled.div`
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #d7d9dd;
`;
const LogoutInfomessage = styled.div`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: normal;
  text-align: left;
  margin-top: 47px;
  color: #6a737c;
`;

const CheckboxWrapper = styled.div`
  font-size: 13px;
  color: #0c0d0e;
  line-height: 17px;
  margin-bottom: 16px;
`;
const RedirectionLogoutDiv = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 4px 0;

  img {
    width: 24px;
    height: 24px;
  }
  a {
    color: #0074cc;
    font-size: 15px;
    margin: 4px;

    &:hover {
      opacity: 0.8;
    }
  }
`;
const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logout = () => {
  const navigate = useNavigate();

  const handleButtonCancel = () => {
    window.localStorage.clear(); //세션이나 쿠키에대한 정보를 지움..
    navigate('/App');
  };

  return (
    <Page>
      <LogoutWrapper>
        <LogoutMessageDiv>
          Clicking “Log out” will log you out of the following
          <br /> domains on this device:
        </LogoutMessageDiv>
        <LogoutCatalog>
          <LogoutForm>
            <RedirectionLogoutDiv>
              <img src={askubuntu} alt="superuser" />
              <a href="/">askubuntu.com</a>
            </RedirectionLogoutDiv>
            <RedirectionLogoutDiv>
              <img src={mathover} alt="mathover" />
              <a href="/">mathoverflow.net</a>
            </RedirectionLogoutDiv>
            <RedirectionLogoutDiv>
              <img src={serverfault} alt="serverfault" />
              <a href="/">serverfault.com</a>
            </RedirectionLogoutDiv>
            <RedirectionLogoutDiv>
              <img src={stackapp} alt="stackapp" />
              <a href="/">stackexchange.com</a>
            </RedirectionLogoutDiv>
            <RedirectionLogoutDiv>
              <img src={stackExchange} alt="stackExchange" />
              <a href="/">stackoverflow.com</a>
            </RedirectionLogoutDiv>
            <RedirectionLogoutDiv>
              <img src={stackLogo} alt="stackLogo" />
              <a href="/">stackoverflow.com</a>
            </RedirectionLogoutDiv>
            <RedirectionLogoutDiv>
              <img src={superuser} alt="superuser" />
              <a href="/">superuser.com</a>
            </RedirectionLogoutDiv>
          </LogoutForm>
          <CheckboxWrapper>
            <input type="checkbox" /> Log out on all devices
          </CheckboxWrapper>
          <ButtonWrapper>
            <LogoutButton>Log out</LogoutButton>
            <CancelButton onClick={handleButtonCancel}>Cancel</CancelButton>
          </ButtonWrapper>
          <LogoutInfomessage>
            If you’re on a shared computer, remember to
            <br /> log out of your Open ID provider (Facebook,
            <br /> Google, Stack Exchange, etc.) as well.
          </LogoutInfomessage>
        </LogoutCatalog>
      </LogoutWrapper>
    </Page>
  );
};

export default Logout;
