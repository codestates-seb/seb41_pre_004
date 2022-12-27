import styled from 'styled-components';
<<<<<<< HEAD
import askubuntu from '../../askubuntu.png'
import mathover from '../../mathover.png'
import serverfault from '../../serverfault.png'
import stackapp from '../../stackapp.png'
import stackExchange from '../../stackExchange.png'
import superuser from '../../superuser.png'
import stackLogo from '../../stackLogo.png'
import { useNavigate } from 'react-router-dom';
=======
import askubuntu from '../../assets/icons/askubuntu.png';
import mathover from '../../assets/icons/mathover.png';
import serverfault from '../../assets/icons/serverfault.png';
import stackapp from '../../assets/icons/stackapp.png';
import stackExchange from '../../assets/icons/stackExchange.png';
import superuser from '../../assets/icons/superuser.png';
import stackLogo from '../../assets/icons/stackLogo.png';
import { useNavigate } from 'react-router-dom';

>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
//로그아웃 로컬스토리지 비워주기 엑세스토큰 제거
const Buttons = styled.button`
  display: inline-block;
  width: 69.8px;
  height: 38px;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  letter-spacing: normal;
<<<<<<< HEAD
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
=======
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  background-color: #0a95ff;
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
  border: none;
`;
const CancelButton = styled(Buttons)`
  background-color: white;
  color: #0a95ff;
  border: none;
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 271px;
  height: 42px;
`;
const LogoutWrapper = styled.div`
  width: 527px;
  height: 525px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoutMessageDiv = styled.div`
  width: 527px;
  height: 55px;
<<<<<<< HEAD
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
=======
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  font-size: 21px;
  line-height: 28px;
  text-align: center;
  letter-spacing: normal;
  margin-bottom: 10px;
`;
const LogoutCatalog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 316px;
  height: 422px;
<<<<<<< HEAD
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
=======
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  font-size: 13px;
  line-height: 17px;
  text-align: left;
  margin: 0 105px;
  margin-bottom: 24px;
  letter-spacing: normal;
  background-color: white;
<<<<<<< HEAD
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px, rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  border-radius: 7px;
`;
const LogoutInfomessage = styled.div`
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
=======
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
    rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  border-radius: 7px;
`;
const LogoutInfomessage = styled.div`
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  font-size: 12px;
  line-height: 16px;
  letter-spacing: normal;
  text-align: left;
  margin-top: 47px;
  color: #6a737c;
  width: 268px;
  height: 10px;
  text-align: center;
<<<<<<< HEAD
  
`;
const CatalogWrapper = styled.div`
  width: 276px;
  height: 28px;
  font-size: 15px;
  line-height: 20px;
  text-align: left;
  letter-spacing: normal;
  color: #0074cc;
`;

const CheckboxWrapper = styled.div`
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
=======
`;
// const CatalogWrapper = styled.div`
//   width: 276px;
//   height: 28px;
//   font-size: 15px;
//   line-height: 20px;
//   text-align: left;
//   letter-spacing: normal;
//   color: #0074cc;
// `;

const CheckboxWrapper = styled.div`
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  width: 268px;
  height: 19px;
  margin-bottom: 16px;
  font-size: 13px;
  text-align: left;
  letter-spacing: normal;
  line-height: 17px;
`;
const CatalogDiv = styled.div`
  background-color: white;
  border-bottom: 1px bold black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
<<<<<<< HEAD
`
=======
`;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
const RedirectionLogoutDiv = styled.div`
  width: 276px;
  height: 28px;
  font-size: 18px;
  display: flex;
  align-items: center;
  img {
    width: 16px;
<<<<<<< HEAD
    height: 16px
  }
  a{
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  text-align: center;
  color: #0074cc;
  text-decoration: none;
    &:hover,
    &:focus,
    &:active{
      color: #0074cc;
      } 
  }

`
=======
    height: 16px;
  }
  a {
    text-align: center;
    color: #0074cc;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      color: #0074cc;
    }
  }
`;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD

`
=======
`;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
const CustomHr = styled.hr`
  width: 280px;
  align-items: center;
  opacity: 70%;
<<<<<<< HEAD
`
const Logout = () =>{
  const navigate = useNavigate()

  const handleButtonCancel = () =>{
    navigate('/App')


  }
=======
`;
const Logout = () => {
  const navigate = useNavigate();

  const handleButtonCancel = () => {
    navigate('/App');
  };
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  return (
    <Page>
      <LogoutWrapper>
        <LogoutMessageDiv>
<<<<<<< HEAD
          Clicking “Log out” will log you out of the following domains on this device:
        </LogoutMessageDiv>
        <LogoutCatalog>
          <CatalogDiv>
            <RedirectionLogoutDiv><img src={askubuntu} alt='superuser'/><a href='#'>askubuntu.com</a></RedirectionLogoutDiv>
            <RedirectionLogoutDiv><img src={mathover} alt='mathover'/><a href='#'>mathoverflow.net</a></RedirectionLogoutDiv>
            <RedirectionLogoutDiv><img src={serverfault} alt='serverfault'/><a href='#'>serverfault.com</a></RedirectionLogoutDiv>
            <RedirectionLogoutDiv><img src={stackapp} alt='stackapp'/><a href='#'>stackexchange.com</a></RedirectionLogoutDiv>
            <RedirectionLogoutDiv><img src={stackExchange} alt='stackExchange'/><a href='#'>stackoverflow.com</a></RedirectionLogoutDiv>
            <RedirectionLogoutDiv><img src={stackLogo} alt='stackLogo'/><a href='#'>stackoverflow.com</a></RedirectionLogoutDiv>
            <RedirectionLogoutDiv><img src={superuser} alt='superuser'/><a href='#'>superuser.com</a></RedirectionLogoutDiv>
            </CatalogDiv>
            <CustomHr/>
          <CheckboxWrapper>
          <input type='checkbox'/> Log out all devices
          </CheckboxWrapper>
            <ButtonWrapper>
              <LogoutButton>Log out</LogoutButton>
              <CancelButton onClick={handleButtonCancel}>Cancel</CancelButton>
            </ButtonWrapper>
        <LogoutInfomessage>
          If you’re on a shared computer, remember to log out of your Open ID provider (Facebook, Google, Stack Exchange, etc.) as well.
        </LogoutInfomessage>

        </LogoutCatalog>
      </LogoutWrapper>
    
    </Page>

  )


}

export default Logout;
=======
          Clicking “Log out” will log you out of the following domains on this
          device:
        </LogoutMessageDiv>
        <LogoutCatalog>
          <CatalogDiv>
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
          </CatalogDiv>
          <CustomHr />
          <CheckboxWrapper>
            <input type="checkbox" /> Log out all devices
          </CheckboxWrapper>
          <ButtonWrapper>
            <LogoutButton>Log out</LogoutButton>
            <CancelButton onClick={handleButtonCancel}>Cancel</CancelButton>
          </ButtonWrapper>
          <LogoutInfomessage>
            If you’re on a shared computer, remember to log out of your Open ID
            provider (Facebook, Google, Stack Exchange, etc.) as well.
          </LogoutInfomessage>
        </LogoutCatalog>
      </LogoutWrapper>
    </Page>
  );
};

export default Logout;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
