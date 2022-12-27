import styled from 'styled-components';

<<<<<<< HEAD

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
=======
const EmailBlock = styled.div`
  margin: 6px 0;
  width: 100%;
`;

const EmailLabel = styled.label`
  display: inline-block;
  margin: 2px 0;
  padding: 0 2px;
  width: 100%;
  text-align: left;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: normal;
  font-family: -apple-system, 'system-ui', 'Segoe UI Adjusted', 'Segoe UI',
    'Liberation Sans', sans-serif;
  align-self: flex-start;
`;

const EmailInput = styled.input.attrs({
  type: 'text',
})`
  display: inline-block;
  width: 100%;
  padding: 7px 9px;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, 'system-ui', 'Segoe UI Adjusted', 'Segoe UI',
    'Liberation Sans', sans-serif;
  box-shadow: none;
  border-radius: 3px;
`;

const EmailForm = ({ loginEmail, setLoginEmail }) => {
  return (
    <EmailBlock>
      <EmailLabel htmlFor="emailInput">Email</EmailLabel>
      <EmailInput
        id="emailInput"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
        required
      />
    </EmailBlock>
  );
};

export default EmailForm;
>>>>>>> 39b2162fce6d886e7b8a49496dd33256f8dd61ad
