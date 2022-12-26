import styled from 'styled-components';
import SignupButton from './SignupButton';
import axios from 'axios';

const DisplayNameInput = styled.input.attrs(
  {
    type: "text",
  }
)`
  display: inline-block;
  padding: 7px 9px;
  width: 268px;
  height: 34px;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  box-shadow: none;
  border-radius: 3px;
`
const DisplayNameLabel = styled.label`
  display: inline-block;
  padding: 0 2px;
  width: 290px;
  height: 34px;
  text-align: left;
  font-size: 15px;
  line-height: 34px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  font-weight: bold;
  vertical-align: bottom;

`
const EmailInput = styled.input.attrs(
  {
    type: "text",
  }
)`
  display: inline-block;
  padding: 7px 9px;
  width: 268px;
  height: 34px;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  box-shadow: none;
  border-radius: 3px;
  
`
const EmailLabel = styled.label`
  display: inline-block;
  padding: 0 2px;
  width: 290px;
  height: 34px;
  text-align: left;
  font-size: 15px;
  line-height: 34px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  font-weight: bold;
  vertical-align: bottom;


`

const PasswordLabel = styled.label`
  display: inline-block;
  padding: 0 2px;
  width: 290px;
  height: 34px;
  text-align: left;
  font-size: 15px;
  line-height: 34px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  font-weight: bold;
  vertical-align: bottom;
  
`
const PasswordInput = styled.input.attrs(
{
  type: "password",
}
)`
  display: inline-block;
  padding: 7px 9px;
  width: 268px;
  height: 34px;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  box-shadow: none;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const Sign = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Msgdiv = styled.div`
  margin-top: 10px;
`

const SignupForm = ({displayName,setDisplayName,signupEmail,setSignupEmail,signupPassword,setSignupPassword}) =>{
  const handleSignupButton = (e) =>{
    e.preventDefault()
    console.log(`displayName:${displayName},signupEmail:${signupEmail},signupPassword:${signupPassword}`)
    const reqbody = {
      name: displayName,
      email: signupEmail,
      password: signupPassword,
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(reqbody))
    .then((res)=>console.log(res))
    .catch((err)=>console.log)

  }
  return (

    <Sign onSubmit={(e)=>handleSignupButton(e)}>
      <DisplayNameLabel htmlFor='displayNameInput'>Display name
      </DisplayNameLabel>
      <DisplayNameInput id='displayNameInput' onChange={(e)=>setDisplayName(e.target.value)} required/>
      <EmailLabel>
      Email
      </EmailLabel>
      <EmailInput onChange={(e)=>setSignupEmail(e.target.value)} required/>
      <PasswordLabel>
      Password
      </PasswordLabel>
      <PasswordInput onChange={(e)=>setSignupPassword(e.target.value)} required/>
      <SignupButton type={'signup'}/>

      <Msgdiv>
      By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy
      Already have an account? Log in
      Are you an employer? Sign up on Talent
      </Msgdiv>
    </Sign>


  )

}

export default SignupForm