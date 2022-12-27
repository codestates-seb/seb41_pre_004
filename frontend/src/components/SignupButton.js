<<<<<<< HEAD
import styled from 'styled-components'
import logo_github from '../logo_github.svg'
import logo_google from '../logo_google.svg'
import logo_facebook from '../logo_facebook.svg'


const SocialSignUpButton = styled.button`
display: inline-block;
display: flex;
justify-content: center;
align-items: center;
font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
word-spacing: normal;
width: 316px;
height: 38px;
padding: 10px;
margin-bottom: 16px;
border-radius: 5px;
letter-spacing: normal;
text-align: center;
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
import styled from 'styled-components';
import logo_github from '../assets/icons/logo_github.svg';
import logo_google from '../assets/icons/logo_google.svg';
import logo_facebook from '../assets/icons/logo_facebook.svg';

const SocialSignUpButton = styled.button`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, 'system-ui', 'Segoe UI Adjusted', 'Segoe UI',
    'Liberation Sans', sans-serif;
  word-spacing: normal;
  width: 100%;
  margin: 4px 0;
  padding: 10px;
  border: 1px solid #d7d9dd;
  border-radius: 5px;
  letter-spacing: normal;
  text-align: center;

  & > img {
    display: inline-block;
    width: 18px;
    height: 18px;
    text-align: center;
    letter-spacing: normal;
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad

const GitSignup = styled(SocialSignUpButton)`
  background-color: #232629;
  color: white;
  outline: none;
<<<<<<< HEAD

`
const GoogleSignup = styled(SocialSignUpButton)`
  outline: none;

`
const FacebookSignup= styled(SocialSignUpButton)`
  background-color: #385499;
  color: white;
  outline: none;
`
const BlueButton = styled.button`
  display: inline-block;
  width: 268px;
  height: 38px;
=======
`;
const GoogleSignup = styled(SocialSignUpButton)`
  background-color: #ffffff;
  outline: none;
`;
const FacebookSignup = styled(SocialSignUpButton)`
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
=======
  font-family: -apple-system, 'system-ui', 'Segoe UI Adjusted', 'Segoe UI',
    'Liberation Sans', sans-serif;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  background-color: #0a95ff;
  padding: 10px;
  margin: 2px 0;
  color: white;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  border-radius: 3px;
  outline: none;
<<<<<<< HEAD
`

const SignupButton = ({type}) =>{
  if(type === 'google'){
    return <GoogleSignup><img src={logo_google} alt='logo_google'/>Sign up with Google</GoogleSignup>
  }
  if(type === 'github'){
    return <GitSignup><img src={logo_github} alt='logo_github'/>Sign up with GitHub</GitSignup>
  }
  if(type === 'facebook'){
    return <FacebookSignup><img src={logo_facebook} alt='logo_facebook'/>Sign up with Facebook</FacebookSignup>
  }
  if(type === 'signup'){
    return <BlueButton>Sign up</BlueButton>;
  }

}

export default SignupButton
=======

  &:hover {
    opacity: 0.8;
  }
`;

const SignupButton = ({ type }) => {
  if (type === 'google') {
    return (
      <GoogleSignup>
        <img src={logo_google} alt="logo_google" />
        Sign up with Google
      </GoogleSignup>
    );
  }
  if (type === 'github') {
    return (
      <GitSignup>
        <img src={logo_github} alt="logo_github" />
        Sign up with GitHub
      </GitSignup>
    );
  }
  if (type === 'facebook') {
    return (
      <FacebookSignup>
        <img src={logo_facebook} alt="logo_facebook" />
        Sign up with Facebook
      </FacebookSignup>
    );
  }
  if (type === 'signup') {
    return <BlueButton>Sign up</BlueButton>;
  }
};

export default SignupButton;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
