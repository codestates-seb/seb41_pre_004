// 사용자 정보 입력 닉네임, 유저 이메일, 패스워드 => 서버이동 => 데이터베이스
import { useState } from 'react';
import styled from 'styled-components';
import SignupButton from '../../components/SignupButton'
import SignupForm from '../../components/SignupForm';
import { Link } from 'react-router-dom';
import icon_question from '../../icon_question.svg'
import icon_tag from '../../icon_question.svg'
import icon_topdown from '../../icon_topdown.svg'
import icon_trophy from '../../icon_trophy.svg'
const SignupPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  

`
const DivReactiveWarpper = styled.div`
  width: 430px;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const JointheStack = styled.h1`
  width: 410px;
  height: 27px;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  font-size: 2.07692308rem;
  margin: 0 0 100px;
  line-height: 1.3;
  text-align: left;
  font-weight: bold;
`
const AskQuestion = styled.div`
  display: flex;
  align-items: center;
  width: 410px;
  height: 24px;
  margin: 0 0 30px;
  font-size: 15px;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  font-weight: bold;
  img{
    width: 26px;
    height: 26px;
    margin: 10px;
  }
`
const UnlockPriviliges = styled(AskQuestion)`
`
const SaveTag = styled(AskQuestion)`
`
const EarnBadge = styled(AskQuestion)`
`


const Signdiv = styled.div`
  
  width: 421px;
  height: 1015px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Context = styled.p`
  width: 421px;
  height: 54px;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  font-size: 21px;
  line-height: 28px;
  text-align: center;
  letter-spacing: normal;
  font-weight: bold;
  margin-bottom: 24px;
`
const ContextLogin = styled.p`
  width: 316;
  height: 78px;
  padding: 16px;
  margin: 24px 52px;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  letter-spacing: normal;

`
const RedirectionLink = styled(Link).attrs(
  
  )`
    font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
    text-align: center;
    color: #0074cc;
    text-decoration: none;
    font-size: 13px;
    &:hover,
    &:focus,
    &:active{
      color: #0074cc;
      } 
  `
const Signup = () =>{

  const [displayName,setDisplayName] = useState('')
  const [signupEmail,setSignupEmail] = useState('')
  const [signupPassword,setSignupPassword] = useState()

  return (
    <SignupPage>
      <DivReactiveWarpper>
        <JointheStack>Join the Stack Overflow community</JointheStack>
        <AskQuestion><img src={icon_question} alt='icon_question'/>Get unstuck — ask a question</AskQuestion>
        <UnlockPriviliges><img src={icon_topdown} alt='icon_topdown'/>Unlock new privileges like voting and commenting</UnlockPriviliges>
        <SaveTag><img src={icon_tag} alt='icon_tag'/>Save your favorite tags, filters, and jobs</SaveTag>
        <EarnBadge><img src={icon_trophy} alt='icon_trophy'/>Earn reputation and badges</EarnBadge>
      </DivReactiveWarpper>
      <Signdiv>
        <Context>
          Create your Stack Overflow account.<br/>It’s free and only takes a minute.
        </Context>
        <SignupButton type={'google'}/>
        <SignupButton type={'github'}/>
        <SignupButton type={'facebook'}/>
        <SignupForm displayName={displayName} setDisplayName={setDisplayName} 
        signupEmail={signupEmail} setSignupEmail={setSignupEmail} 
        signupPassword={signupPassword} setSignupPassword={setSignupPassword}/>
        <ContextLogin>
        Already have an account? <RedirectionLink to='/login'>Log in</RedirectionLink><br/>
        Are you an employer? Sign up on Talent 
        </ContextLogin>
    
      </Signdiv>
    </SignupPage>
  )



}

export default Signup;
