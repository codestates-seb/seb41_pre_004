import styled from 'styled-components';
<<<<<<< HEAD
import logo_github from '../logo_github.svg'
import logo_google from '../logo_google.svg'
import logo_facebook from '../logo_facebook.svg'
const SocialLoginButton = styled.button`
display: inline-block;
display: flex;
justify-content: center;
align-items: center;
font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif
word-spacing: normal;
width: 287px;
height: 61px;
padding: 10px;
margin-bottom: 16px;
border-radius: 5px;
letter-spacing: normal;
text-align: center;
font-weight: norbal
;



& > img {
  display: inline-block;
  width: 18px;
  height: 18px;
  text-align: center;
  letter-spacing: normal;
  margin-right: 10px;
}
`
=======
import logo_github from '../assets/icons/logo_github.svg';
import logo_google from '../assets/icons/logo_google.svg';
import logo_facebook from '../assets/icons/logo_facebook.svg';

const SocialLoginButton = styled.button`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-family: -apple-system, 'system-ui', 'Segoe UI Adjusted', 'Segoe UI',
    'Liberation Sans', sans-serif;
  word-spacing: normal;
  border: 1px solid #d7d9dd;
  padding: 10px;
  margin: 4px 0;
  border-radius: 5px;
  letter-spacing: normal;
  text-align: center;
  font-weight: norbal;

  & > img {
    display: inline-block;
    width: 18px;
    height: 18px;
    text-align: center;
    letter-spacing: normal;
    margin-right: 4px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
const GitLogin = styled(SocialLoginButton)`
  background-color: #232629;
  color: white;
  outline: none;
<<<<<<< HEAD

`
const GoogleLogin = styled(SocialLoginButton)`
  outline: none;


`
const FacebookLogin= styled(SocialLoginButton)`
  background-color: #385499;
  color: white;
  outline: none;

  & > img{
  }
`
const BlueButton = styled.button`
  display: inline-block;
  width: 240px;
  height: 37px;
=======
`;

const GoogleLogin = styled(SocialLoginButton)`
  outline: none;
`;

const FacebookLogin = styled(SocialLoginButton)`
  background-color: #385499;
  color: white;
  outline: none;
`;

const BlueButton = styled.button`
  display: inline-block;
  width: 100%;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  letter-spacing: center;
<<<<<<< HEAD
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  background-color: #0a95ff;
  padding: 10px;
  margin: 2px 0;
=======
  font-family: -apple-system, 'system-ui', 'Segoe UI Adjusted', 'Segoe UI',
    'Liberation Sans', sans-serif;
  background-color: #0a95ff;
  padding: 10px;
  margin: 6px 0;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  color: white;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  border-radius: 3px;
  outline: none;
  margin: 10px 0px;
<<<<<<< HEAD
`

const LoginButton = ({type,onClick}) =>{
  if(type === 'google') {
    return <GoogleLogin onClick={onClick}><img src={logo_google} alt='logo_google'/>Log in with Google</GoogleLogin>
  }
  if(type === 'github') {
    return <GitLogin onClick={onClick}><img src={logo_github} alt='logo_github'/>Log in with GitHub</GitLogin>
  }
  if(type === 'facebook') {
    return <FacebookLogin onClick={onClick}><img src={logo_facebook} alt='logo_facebook'/>Log in with Facebook</FacebookLogin>
  }
  if(type ==='login'){
    return <BlueButton>Log in</BlueButton>
  }

}

export default LoginButton
=======

  &:hover {
    opacity: 0.8;
  }
`;

const LoginButton = ({ type, onClick }) => {
  if (type === 'google') {
    return (
      <GoogleLogin onClick={onClick}>
        <img src={logo_google} alt="logo_google" />
        Log in with Google
      </GoogleLogin>
    );
  }
  if (type === 'github') {
    return (
      <GitLogin onClick={onClick}>
        <img src={logo_github} alt="logo_github" />
        Log in with GitHub
      </GitLogin>
    );
  }
  if (type === 'facebook') {
    return (
      <FacebookLogin onClick={onClick}>
        <img src={logo_facebook} alt="logo_facebook" />
        Log in with Facebook
      </FacebookLogin>
    );
  }
  if (type === 'login') {
    return <BlueButton>Log in</BlueButton>;
  }
};

export default LoginButton;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
