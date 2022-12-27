<<<<<<< HEAD
import LoginButton from '../../components/LoginButtons'
import styled from 'styled-components';
import LoginInputForm from '../../components/LoginInputForm';
import logo_stack from '../../logo_stack.svg';
import copyButton from '../../copyButton.svg';
import { Link } from 'react-router-dom';
const LoginWrapper = styled.div`
  width:  541px;
  height: 572px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const ButtonWrapper = styled.div`
  
  width: 288px;
  height: 137px;
  display: flex;
  flex-direction: column;

`
const Logowrapper = styled.div`
  width: 288px;
  height: 32px;
  display: flex;
  justify-content: center;
=======
import LoginButton from '../../components/LoginButtons';
import styled from 'styled-components';
import LoginInputForm from '../../components/LoginInputForm';
import logo_stack from '../../assets/icons/logo_stack.svg';
import copyButton from '../../assets/icons/copyButton.svg';
import { Link } from 'react-router-dom';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;
const Logowrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  cursor: pointer;

>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  img {
    width: 32px;
    height: 37px;
  }
<<<<<<< HEAD
  margin-bottom: -45px;

`
const FormWrapper = styled.div`
  margin-top: -40px;
  width: 288px;
  height: 236px;
  border-radius: 7px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px, rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;

`
const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const RedirectionDiv1 = styled.div`
  width: 257px;
  height: 46px;
  padding: 16px;
  margin-bottom: 24px;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
`
const RedirectionLink = styled(Link).attrs(
  
)`
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
=======
`;
const FormWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
  padding: 24px;
  border-radius: 7px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
    rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
`;
const RedirectionDiv1 = styled.div`
  padding: 16px;
  margin-bottom: 24px;
  font-size: 13px;
  text-align: center;
`;
const RedirectionLink = styled(Link).attrs()`
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  text-align: center;
  color: #0074cc;
  text-decoration: none;
  font-size: 13px;
  &:hover,
  &:focus,
<<<<<<< HEAD
  &:active{
    color: #0074cc;
    } 
`
const RedirectionDiv2 = styled.div`
  margin-top: 12px;
  width: 257px;
  height: 17px;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
=======
  &:active {
    color: #0074cc;
  }
`;
const RedirectionDiv2 = styled.div`
  margin-top: 12px;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  vertical-align: baseline;
<<<<<<< HEAD
  


  >:last-child{
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  text-align: center;
  color: #0074cc;
  text-decoration: none;
  font-size: 13px;
    &:hover,
    &:focus,
    &:active{
      color: #0074cc;
      } 
  }
`
const Login = () =>{

  const handleButtonClick = () =>{
    console.log('action')
  }

return (
  <Page>
    <LoginWrapper>
      <Logowrapper><img src={logo_stack} alt='logo_stack'/></Logowrapper>
      <ButtonWrapper>
        <LoginButton onClick={handleButtonClick} type={'google'}/>
        <LoginButton onClick={handleButtonClick} type={'github'}/>
        <LoginButton onClick={handleButtonClick} type={'facebook'}/>
      </ButtonWrapper>
      <FormWrapper>
        <LoginInputForm />
      </FormWrapper>
    </LoginWrapper>
    <RedirectionDiv1>
        Don't have an account? <RedirectionLink to='/signup'>Sign up</RedirectionLink>
        <RedirectionDiv2>
          Are you an empolyer? <a herf='#'>Sign up on Talent<img src={copyButton}/></a>
        </RedirectionDiv2>
    </RedirectionDiv1>
  </Page>

)


}

export default Login
=======

  > :last-child {
    text-align: center;
    color: #0074cc;
    text-decoration: none;
    font-size: 13px;
    &:hover,
    &:focus,
    &:active {
      color: #0074cc;
    }
  }
`;
const Login = () => {
  const handleButtonClick = () => {
    console.log('action');
  };

  return (
    <Page>
      <LoginWrapper>
        <Logowrapper>
          <img src={logo_stack} alt="logo_stack" />
        </Logowrapper>
        <ButtonWrapper>
          <LoginButton onClick={handleButtonClick} type={'google'} />
          <LoginButton onClick={handleButtonClick} type={'github'} />
          <LoginButton onClick={handleButtonClick} type={'facebook'} />
        </ButtonWrapper>
        <FormWrapper>
          <LoginInputForm />
        </FormWrapper>
        <RedirectionDiv1>
          Don't have an account?{' '}
          <RedirectionLink to="/signup">Sign up</RedirectionLink>
          <RedirectionDiv2>
            Are you an empolyer?{' '}
            <a href="/">
              Sign up on Talent
              <img src={copyButton} alt="" />
            </a>
          </RedirectionDiv2>
        </RedirectionDiv1>
      </LoginWrapper>
    </Page>
  );
};

export default Login;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
