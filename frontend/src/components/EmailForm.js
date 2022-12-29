import styled from 'styled-components';

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

export default EmailForm;
