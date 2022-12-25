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
  img {
    width: 32px;
    height: 37px;
  }
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
  text-align: center;
  color: #0074cc;
  text-decoration: none;
  font-size: 13px;
  &:hover,
  &:focus,
  &:active{
    color: #0074cc;
    } 
`
const RedirectionDiv2 = styled.div`
  margin-top: 12px;
  width: 257px;
  height: 17px;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  vertical-align: baseline;
  


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
