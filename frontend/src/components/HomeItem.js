import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Mobile, Tablet, Desktop } from './Responsive';

function Homeitem({ question }) {
  console.log(question);

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
              <Link to={`/questions/${question.questionId}`} state={question}>
                <QuestionSpan>{question.title}</QuestionSpan>
              </Link>
            </QuestionTitle>
            <QuestionTagBox>
              <QuestionTag>
                <QuestionTagUl>
                  {/* {question.tags.map((tag, idx) => {
                    return <QuestionTaglist key={idx}>{tag}</QuestionTaglist>;
                  })} */}
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
                {/* homeData.createdAt // 내장date함수시간에서 creat시간을 빼주고 문자열로 리터럴 문자열 */}
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
            <QuestionAnswer>2 views</QuestionAnswer>
          </MobileInfo>
          <QuestionContent>
            <QuestionTitle>
              <Link to={`/questions/${question.questionId}`} state={question}>
                <QuestionSpan>{question.title}</QuestionSpan>
              </Link>
            </QuestionTitle>
            <QuestionTagBox>
              <QuestionTag>
                <QuestionTagUl>
                  {/* {question.tags.map((tag, idx) => {
                    return <QuestionTaglist key={idx}>{tag}</QuestionTaglist>;
                  })} */}
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
            <QuestionAnswer>2 views</QuestionAnswer>
          </MobileInfo>
          <QuestionContent>
            <QuestionTitle>
              <Link to={`/questions/${question.questionId}`} state={question}>
                <MobileTitle>{question.title}</MobileTitle>
              </Link>
            </QuestionTitle>
            <QuestionTagBox>
              <QuestionTag>
                <QuestionTagUl>
                  {/* {question.tags.map((tag, idx) => {
                    return <QuestionTaglist key={idx}>{tag}</QuestionTaglist>;
                  })} */}
                </QuestionTagUl>
              </QuestionTag>
            </QuestionTagBox>

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

const QuestionTagBox = styled.div``;
const QuestionTag = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const QuestionUserInfo = styled.div`
  display: flex;
<<<<<<< HEAD
<<<<<<< HEAD
  justify-content: center;
=======
  justify-content: end;
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
=======
  justify-content: end;
>>>>>>> 682a352c6f9186a8b87cdc5f51bffe66d9565815
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
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }
`;

export default Homeitem;
