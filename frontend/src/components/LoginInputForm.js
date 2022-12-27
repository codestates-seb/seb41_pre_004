import styled from 'styled-components';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
<<<<<<< HEAD
import LoginButton from './LoginButtons'
import { useState } from 'react';
import axios from 'axios';


const LoginForm = styled.form`
  margin: 10px;
=======
import LoginButton from './LoginButtons';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = styled.form`
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  background-color: white;

`

const LoginInputForm = () =>{
  const [loginEmail,setLoginEmail] = useState('')
  const [loginPassword,setLoginPassword] = useState()
  const handleSubmitButton = (e) =>{
    e.preventDefault()
    console.log(`loginEmail: ${loginEmail}`)
    console.log(`loginPassword: ${loginPassword}`)
    const reqbody = {
      id: 13,
      loginEmail: loginEmail,
      loginPassword:loginPassword,
    }

    axios.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(reqbody))
      .then((res)=>console.log(res))
      .catch((err)=>console.log)
  }
  return(
  
      <LoginForm onSubmit={(e)=>handleSubmitButton(e)}>
        <EmailForm loginEmail={loginEmail} setLoginEmail={setLoginEmail}/>
        <PasswordForm loginPassword={loginPassword} setLoginPassword={setLoginPassword}/>
        <LoginButton type={'login'}/>
      </LoginForm>

  )

}

export default LoginInputForm;
=======
  width: 100%;
  background-color: white;
`;

const LoginInputForm = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState();
  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(`loginEmail: ${loginEmail}`);
    console.log(`loginPassword: ${loginPassword}`);
    const reqbody = {
      id: 13,
      loginEmail: loginEmail,
      loginPassword: loginPassword,
    };

    axios
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify(reqbody),
      )
      .then((res) => console.log(res))
      .catch((err) => console.log);
  };
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

export default LoginInputForm;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
