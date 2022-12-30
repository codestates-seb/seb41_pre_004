import styled from 'styled-components';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import LoginButton from './LoginButtons';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginInputForm = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(`loginEmail: ${loginEmail}`);
    console.log(`loginPassword: ${loginPassword}`);
    const reqbody = {

      username: loginEmail,
      password: loginPassword,
    };
    /*
      /auth/login
        { "username" : “kcd@gmail.com", "password" : "1111" }
    */
    const headers = {
      'Content-Type': 'application/json',
    }

    axios
      .post(
        'http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/auth/login',
        JSON.stringify(reqbody),headers
      )
      .then((res) =>{
        window.alert('로그인 성공!!');
        localStorage.setItem('token', JSON.stringify(res.headers));
        navigate('../../')
        

      }) // 토큰이나 쿠키,세션등 인증정보를 가진채로 로그인된 메인헤더페이지로 리로드
      .catch((err) => {
        setLoginEmail('');
        setLoginPassword('');
        window.alert('로그인 정보가 일치하지 않습니다!!');
      });
    }
      
    return (
      <LoginForm onSubmit={(e) => handleSubmitButton(e)}>
        <EmailForm loginEmail={loginEmail} setLoginEmail={setLoginEmail} />
        <PasswordForm
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
        />
        <LoginButton type={'login'} />
      </LoginForm>
    );
  };




const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`;

export default LoginInputForm;
