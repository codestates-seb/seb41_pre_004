// 사용자 정보 입력 닉네임, 유저 이메일, 패스워드 => 서버이동 => 데이터베이스
import { useState } from 'react';
import styled from 'styled-components';
import SignupButton from '../../components/SignupButton';
import SignupForm from '../../components/SignupForm';
import { Link } from 'react-router-dom';
import icon_question from '../../assets/icons/icon_question.svg';
import icon_tag from '../../assets/icons/icon_question.svg';
import icon_topdown from '../../assets/icons/icon_topdown.svg';
import icon_trophy from '../../assets/icons/icon_trophy.svg';
import { Desktop, Tablet, Mobile } from '../../components/Responsive';

const Signup = () => {
  const [displayName, setDisplayName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState();

  return (
    <SignupPage>
      <SignupContent>
        <Desktop>
          <DivReactiveWarpper>
            <JointheStack>Join the Stack Overflow community</JointheStack>
            <AskQuestion>
              <img src={icon_question} alt="icon_question" />
              Get unstuck — ask a question
            </AskQuestion>
            <UnlockPriviliges>
              <img src={icon_topdown} alt="icon_topdown" />
              Unlock new privileges like voting and commenting
            </UnlockPriviliges>
            <SaveTag>
              <img src={icon_tag} alt="icon_tag" />
              Save your favorite tags, filters, and jobs
            </SaveTag>
            <EarnBadge>
              <img src={icon_trophy} alt="icon_trophy" />
              Earn reputation and badges
            </EarnBadge>
          </DivReactiveWarpper>
        </Desktop>
        <SignupWrapper>
          <Tablet>
            <SignupTablet>
              Create your Stack Overflow account. It’s free
              <br /> and only takes a minute.
            </SignupTablet>
          </Tablet>
          <Mobile>
            <SignupMobile>
              Create your Stack Overflow account. It’s
              <br /> free and only takes a minute.
            </SignupMobile>
          </Mobile>
          <SignupButtonBlock>
            <SignupButton type={'google'} />
            <SignupButton type={'github'} />
            <SignupButton type={'facebook'} />
          </SignupButtonBlock>
          <Signdiv>
            <SignupForm
              displayName={displayName}
              setDisplayName={setDisplayName}
              signupEmail={signupEmail}
              setSignupEmail={setSignupEmail}
              signupPassword={signupPassword}
              setSignupPassword={setSignupPassword}
            />
          </Signdiv>
          <ContextLogin>
            Already have an account?{' '}
            <RedirectionLink to="/login">Log in</RedirectionLink>
            <br />
            Are you an employer? Sign up on Talent
          </ContextLogin>
        </SignupWrapper>
      </SignupContent>
    </SignupPage>
  );
};

const SignupPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
  padding: 24px;
`;

const SignupContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 53px;
`;

const DivReactiveWarpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 48px;
  margin-bottom: 128px;
`;

const JointheStack = styled.h1`
  margin-bottom: 32px;
  font-size: 27px;
  line-height: 1.3;
  text-align: left;
`;
const AskQuestion = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-size: 15px;

  img {
    width: 26px;
    height: 26px;
    margin-right: 8px;
  }
`;
const UnlockPriviliges = styled(AskQuestion)``;
const SaveTag = styled(AskQuestion)``;
const EarnBadge = styled(AskQuestion)``;

const Signdiv = styled.div`
  width: 100%;
  max-width: 316px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-bottom: 24px;
`;

const SignupButtonBlock = styled.div`
  width: 100%;
  max-width: 316px;
  margin-bottom: 16px;
`;

const ContextLogin = styled.p`
  padding: 16px;
  margin-bottom: 24px;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  letter-spacing: normal;
`;
const RedirectionLink = styled(Link).attrs()`
  text-align: center;
  color: #0074cc;
  text-decoration: none;
  font-size: 13px;
  &:hover,
  &:focus,
  &:active {
    color: #0074cc;
  }
`;

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupTablet = styled.div`
  font-size: 21px;
  line-height: 27px;
  text-align: center;
  color: #232629;
  margin-bottom: 24px;
`;

const SignupMobile = styled(SignupTablet)`
  font-size: 19px;
`;

export default Signup;
