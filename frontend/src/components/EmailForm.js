import styled from 'styled-components';


const EmailInput = styled.input.attrs(
  {
    type: "text",
  }
)`
  display: inline-block;
  padding: 7px 9px;
  width: 240px;
  height: 33px;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  box-shadow: none;
  border-radius: 3px;
  margin-bottom: 5px;

`
const EmailLabel = styled.label`
  display: inline-block;
  padding: 0 2px;
  width: 240px;
  height: 19px;
  text-align: left;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  align-self: flex-start;

`


const EmailForm = ({loginEmail,setLoginEmail}) =>{

  return (
    <>
    <EmailLabel htmlFor='emailInput'>
      Email:
    </EmailLabel>
    <EmailInput id='emailInput'value={loginEmail}onChange={(e)=>setLoginEmail(e.target.value)} required/>
    </>
  
  )

}

export default EmailForm