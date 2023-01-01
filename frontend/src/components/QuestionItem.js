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
            <QuestionAnswer>2 views</QuestionAnswer>
          </QuestionInfo>
          <QuestionContent>
            <QuestionTitle>
              <Link to={`/questions/${question.questionId}`}>
                <QuestionSpan>{question.title}</QuestionSpan>
              </Link>
            </QuestionTitle>
            <QuestionDesc
              dangerouslySetInnerHTML={{ __html: question.content }}
            />
            <QuestionUserBox>
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
                {/* homeData.createdAt // 내장date함수시간에서 creat시간을 빼주고 문자열로 리터럴 문자열 */}
              </QuestionUserInfo>
            </QuestionUserBox>
          </QuestionContent>
        </QuestionBox>
      </Desktop>

      <Tablet>
        <MobileBox>
          <MobileInfo>
            <QuestionVote>1 votes</QuestionVote>
            <QuestionAnswer>0 answers</QuestionAnswer>
            <QuestionAnswer>2 views</QuestionAnswer>
          </MobileInfo>
          <QuestionContent>
            <QuestionTitle>
              <Link to={`/questions/${question.questionId}`}>
                <QuestionSpan>{question.title}</QuestionSpan>
              </Link>
            </QuestionTitle>
            <QuestionDesc
              dangerouslySetInnerHTML={{ __html: question.content }}
            />
            <QuestionUserBox>
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
            </QuestionUserBox>
          </QuestionContent>
        </MobileBox>
      </Tablet>

      <Mobile>
        <MobileBox>
          <MobileInfo>
            <QuestionVote>1 votes</QuestionVote>
            <QuestionAnswer>0 answers</QuestionAnswer>
            <QuestionAnswer>2 views</QuestionAnswer>
          </MobileInfo>
          <QuestionContent>
            <QuestionTitle>
              <Link to={`/questions/${question.questionId}`}>
                <MobileTitle>{question.title}</MobileTitle>
              </Link>
            </QuestionTitle>
            <MobileDesc
              dangerouslySetInnerHTML={{ __html: question.content }}
            />
            <QuestionUserBox>
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
            </QuestionUserBox>
          </QuestionContent>
        </MobileBox>
      </Mobile>
    </>
  );
}

const QuestionBox = styled.div`
  width: 100%;
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
  margin-bottom: 5px;
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
  word-break: break-all;
  overflow-wrap: break-all;
  hyphens: auto;
`;
const MobileDesc = styled(QuestionDesc)`
  font-size: 11px;
`;
const QuestionUserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
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

export default Questionitem;
