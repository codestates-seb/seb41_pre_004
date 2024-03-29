import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Mobile, Tablet, Desktop } from './Responsive';

function Homeitem({ question }) {
  return (
    <>
      <Desktop>
        <QuestionBox>
          <QuestionInfo>
            <QuestionVote>{question.score} votes</QuestionVote>
            <QuestionAnswer>{question.answers.length} answers</QuestionAnswer>
            <QuestionAnswer>{question.viewCount} views</QuestionAnswer>
          </QuestionInfo>
          <QuestionContent>
            <QuestionTitle>
              <Link to={`/questions/${question.questionId}`}>
                <QuestionSpan>{question.title}</QuestionSpan>
              </Link>
            </QuestionTitle>
            <QuestionUserBox>
              <QuestionUserInfo>
                <UserImage>
                  <img
                    src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                    alt=""
                  />
                </UserImage>
                <Username>{question.userName}</Username>
              </QuestionUserInfo>
            </QuestionUserBox>
          </QuestionContent>
        </QuestionBox>
      </Desktop>

      <Tablet>
        <MobileBox>
          <MobileInfo>
            <QuestionVote>{question.score} votes</QuestionVote>
            <QuestionAnswer>{question.answers.length} answers</QuestionAnswer>
            <QuestionAnswer>{question.viewCount} views</QuestionAnswer>
          </MobileInfo>
          <QuestionContent>
            <QuestionTitle>
              <Link to={`/questions/${question.questionId}`}>
                <QuestionSpan>{question.title}</QuestionSpan>
              </Link>
            </QuestionTitle>
            <QuestionUserBox>
              <QuestionUserInfo>
                <UserImage>
                  <img
                    src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                    alt=""
                  />
                </UserImage>
                <Username>{question.userName}</Username>
              </QuestionUserInfo>
            </QuestionUserBox>
          </QuestionContent>
        </MobileBox>
      </Tablet>

      <Mobile>
        <MobileBox>
          <MobileInfo>
            <QuestionVote>{question.score} votes</QuestionVote>
            <QuestionAnswer>{question.answers.length} answers</QuestionAnswer>
            <QuestionAnswer>{question.viewCount} views</QuestionAnswer>
          </MobileInfo>
          <QuestionContent>
            <QuestionTitle>
              <Link to={`/questions/${question.questionId}`}>
                <MobileTitle>{question.title}</MobileTitle>
              </Link>
            </QuestionTitle>
            <QuestionUserBox>
              <QuestionUserInfo>
                <UserImage>
                  <img
                    src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                    alt=""
                  />
                </UserImage>
                <Username>{question.userName}</Username>
              </QuestionUserInfo>
            </QuestionUserBox>
          </QuestionContent>
        </MobileBox>
      </Mobile>
    </>
  );
}

const QuestionBox = styled.div`
  width: 100%;
  max-width: 751px;
  display: flex;
  padding: 16px;
  border-top: 1px solid #ecebee;
`;
const MobileBox = styled(QuestionBox)`
  flex-direction: column;
`;
const QuestionInfo = styled.div`
  width: 108px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 17px;
  gap: 6px;
  margin: 0 16px 4px 0;
`;
const MobileInfo = styled.div`
  display: flex;
  gap: 6px;
  margin: 0 16px 4px 0;
`;
const QuestionVote = styled.div`
  font-size: 13px;
  color: #0c0d0e;
`;
const QuestionAnswer = styled(QuestionVote)`
  color: #6a737c;
`;
const QuestionContent = styled.div`
  flex-grow: 1;
`;
const QuestionTitle = styled.h1`
  height: 40px;
  margin-bottom: 20px;
`;

const QuestionSpan = styled.span`
  font-size: 17px;
  color: #0074cc;

  &:hover {
    opacity: 0.8;
  }
`;

const MobileTitle = styled(QuestionSpan)`
  font-size: 14px;
`;

const QuestionUserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
`;

const QuestionUserInfo = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 4px;
`;
const UserImage = styled.div`
  width: 16px;
  height: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`;
const Username = styled.h2`
  font-size: 12px;
  color: #0074cc;
`;

export default Homeitem;
