import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Mobile, Tablet, Desktop } from './Responsive';

function Questionitem({ question }) {
  return (
    <>
      <Desktop>
        <QuestionBox>
          <QuestionInfo>
            <QuestionVote>1 votes</QuestionVote>
            <QuestionAnswer>0 answers</QuestionAnswer>
          </QuestionInfo>
          <QuestionContent>
            <Link to={`/questions/${question.id}`}>
              <QuestionTitle>{question.title}</QuestionTitle>
            </Link>
            <QuestionDesc>{question.content}</QuestionDesc>
            <QuestionTagBox>
              <QuestionTag>
                <QuestionTagUl>
                  {question.tags.map((tag) => {
                    return <QuestionTaglist>{tag}</QuestionTaglist>;
                  })}
                </QuestionTagUl>
              </QuestionTag>

              <QuestionUserInfo>
                <UserImage>
                  <img
                    src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                    alt=""
                  />
                </UserImage>
                <Username>불4조</Username>
                <UserScore>1004</UserScore>
                <AskTime>asked 1 min ago</AskTime>
              </QuestionUserInfo>
            </QuestionTagBox>
          </QuestionContent>
        </QuestionBox>
      </Desktop>

      <Tablet>
        <MobileBox>
          <MobileInfo>
            <QuestionVote>1 votes</QuestionVote>
            <QuestionAnswer>0 answers</QuestionAnswer>
          </MobileInfo>
          <QuestionContent>
            <Link to={`/questions/${question.id}`}>
              <QuestionTitle>{question.title}</QuestionTitle>
            </Link>
            <QuestionDesc>{question.content}</QuestionDesc>
            <QuestionTagBox>
              <QuestionTag>
                <QuestionTagUl>
                  {question.tags.map((tag) => {
                    return <QuestionTaglist>{tag}</QuestionTaglist>;
                  })}
                </QuestionTagUl>
              </QuestionTag>

              <QuestionUserInfo>
                <UserImage>
                  <img
                    src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                    alt=""
                  />
                </UserImage>
                <Username>불4조</Username>
                <UserScore>1004</UserScore>
                <AskTime>asked 1 min ago</AskTime>
              </QuestionUserInfo>
            </QuestionTagBox>
          </QuestionContent>
        </MobileBox>
      </Tablet>

      <Mobile>
        <MobileBox>
          <MobileInfo>
            <QuestionVote>1 votes</QuestionVote>
            <QuestionAnswer>0 answers</QuestionAnswer>
          </MobileInfo>
          <QuestionContent>
            <Link to={`/questions/${question.id}`}>
              <MobileTitle>{question.title}</MobileTitle>
            </Link>
            <MobileDesc>{question.content}</MobileDesc>
            <QuestionTagBox>
              <QuestionTag>
                <QuestionTagUl>
                  {question.tags.map((tag) => {
                    return <QuestionTaglist>{tag}</QuestionTaglist>;
                  })}
                </QuestionTagUl>
              </QuestionTag>

              <QuestionUserInfo>
                <UserImage>
                  <img
                    src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                    alt=""
                  />
                </UserImage>
                <Username>불4조</Username>
                <UserScore>1004</UserScore>
                <AskTime>asked 1 min ago</AskTime>
              </QuestionUserInfo>
            </QuestionTagBox>
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
  flex-shrink: 0;
  width: 108px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 17px;
  gap: 6px;
  padding: 0 16px 4px 0;
`;
const MobileInfo = styled(QuestionInfo)`
  flex-direction: row;
  width: auto;
`;
const QuestionVote = styled.div`
  font-size: 13px;
  color: #0c0d0e;
`;
const QuestionAnswer = styled(QuestionVote)`
  color: #6a737c;
`;
const QuestionContent = styled.div``;
const QuestionTitle = styled.h1`
  padding-right: 24px;
  margin-top: -1px;
  margin-bottom: 5px;
  font-size: 17px;
  color: #0074cc;

  &:hover {
    opacity: 0.8;
  }
`;
const MobileTitle = styled(QuestionTitle)`
  font-size: 14px;
`;
const QuestionDesc = styled.p`
  height: 34px;
  margin: -2px 0 8px 0;
  font-size: 13px;
  line-height: 17px;
  color: #3b4045;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
`;
const MobileDesc = styled(QuestionDesc)`
  font-size: 11px;
`;
const QuestionTagBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const QuestionTag = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const QuestionUserInfo = styled.div`
  display: flex;
  justify-content: center;
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
const UserScore = styled.span`
  font-size: 12px;
  color: #525960;
`;
const AskTime = styled.span`
  font-size: 12px;
  color: #6a737c;
`;
const QuestionTagUl = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  padding-left: 0px;
  margin-bottom: 13px;
  margin-top: 0px;
`;
const QuestionTaglist = styled.li`
  padding: 4px 6px;
  font-size: 12px;
  color: #39739d;
  background-color: #e1ecf4;
  border-radius: 3px;
`;

export default Questionitem;
