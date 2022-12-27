import styled from 'styled-components';

const PasswordForm = ({ loginPassword, setLoginPassword }) => {
  return (
    <PasswordBlock>
      <LabelBlock>
        <PasswordLabel htmlFor="passwordInput">Password</PasswordLabel>
        <PasswordSearch>Forgot password?</PasswordSearch>
      </LabelBlock>
      <PasswordInput
        id="passwordInput"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        required
      />
    </PasswordBlock>
  );
};

const PasswordBlock = styled.div`
  width: 100%;
  margin: 6px 0;
`;

const LabelBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
`;

const PasswordLabel = styled.label`
  display: inline-block;
  padding: 0 2px;
  text-align: left;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: normal;
  font-family: -apple-system, 'system-ui', 'Segoe UI Adjusted', 'Segoe UI',
    'Liberation Sans', sans-serif;
  align-self: flex-start;
`;

const PasswordSearch = styled.button`
  font-size: 12px;
  color: #0074cc;
`;

const PasswordInput = styled.input.attrs({
  type: 'password',
})`
  display: inline-block;
  padding: 7px 9px;
  width: 100%;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, 'system-ui', 'Segoe UI Adjusted', 'Segoe UI',
    'Liberation Sans', sans-serif;
  box-shadow: none;
  border-radius: 3px;
  margin-bottom: 5px;
`;

export default PasswordForm;
