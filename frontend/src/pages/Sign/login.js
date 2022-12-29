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

  img {
    width: 32px;
    height: 37px;
  }
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
  text-align: center;
  color: #0074cc;
  text-decoration: none;
  font-size: 13px;
  &:hover,
  &:focus,
  &:active {
    color: #0074cc;
  }
`;
const RedirectionDiv2 = styled.div`
  margin-top: 12px;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  vertical-align: baseline;

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
