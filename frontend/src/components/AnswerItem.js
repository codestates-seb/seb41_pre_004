import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import arrowUpIcon from '../assets/icons/arrowUpIcon.png';
import arrowDownIcon from '../assets/icons/arrowDownIcon.png';
import { Mobile, Tablet, Desktop } from '../components/Responsive';
import QuestionDetailUser from '../components/QuestionDetailUser';
import AnsMarkdown from '../components/AnswerMarkdown';

import {
  ContainerWrapper,
  ContainerFlex,
  MobileContent,
  DesktopContent,
  ContentBlock,
  DetailSideBlock,
} from '../styles/contentStyle';
import { useState } from 'react';

const AnswerItem = ({ loginUsername }) => {
  const question = useLocation().state;
  const [answer, setAnswer] = useState('');

  return (
    <>
      <AnswerContainer>
        <Mobile>
          <MobileContent>
            <ContentBlock>
              <Post>
                <PostLeft>
                  <VoteButton>
                    <img src={arrowUpIcon} alt="Vote Up" />
                  </VoteButton>
                  <VoteCount>0</VoteCount>
                  <VoteButton>
                    <img src={arrowDownIcon} alt="Vote Down" />
                  </VoteButton>
                </PostLeft>
                <PostRight>
                  <PostText>{question.content}</PostText>

                  <QuestionUser>
                    <QuestionDetailUser
                      question={question}
                      loginUsername={loginUsername}
                    />
                  </QuestionUser>
                </PostRight>
              </Post>
            </ContentBlock>
          </MobileContent>
        </Mobile>

        <Tablet>
          <MobileContent>
            <ContentBlock>
              <Post>
                <PostLeft>
                  <VoteButton>
                    <img src={arrowUpIcon} alt="Vote Up" />
                  </VoteButton>
                  <VoteCount>0</VoteCount>
                  <VoteButton>
                    <img src={arrowDownIcon} alt="Vote Down" />
                  </VoteButton>
                </PostLeft>
                <PostRight>
                  <PostText>{question.content}</PostText>

                  <QuestionUser>
                    <QuestionDetailUser
                      question={question}
                      loginUsername={loginUsername}
                    />
                  </QuestionUser>
                </PostRight>
              </Post>
            </ContentBlock>
          </MobileContent>
        </Tablet>

        <Desktop>
          <DesktopContent>
            <ContentBlock>
              <AnswerBlock>
                <PostLeft>
                  <VoteButton>
                    <img src={arrowUpIcon} alt="Vote Up" />
                  </VoteButton>
                  <VoteCount>0</VoteCount>
                  <VoteButton>
                    <img src={arrowDownIcon} alt="Vote Down" />
                  </VoteButton>
                </PostLeft>
                <AnswerRight>
                  <PostText>{question.content}</PostText>

                  <QuestionUser>
                    <QuestionDetailUser
                      question={question}
                      loginUsername={loginUsername}
                    />
                  </QuestionUser>
                </AnswerRight>
              </AnswerBlock>
            </ContentBlock>
          </DesktopContent>
        </Desktop>
      </AnswerContainer>
    </>
  );
};

const AnswerContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 709px;
`;

const AnswerBlock = styled.div`
  display: flex;
`;

const AnswerRight = styled.div`
  width: 100%;
  //   max-width: 595px;
`;

const AnswerBtn = styled.div`
  button {
    background-color: #0a95ff;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    margin-top: 8px;
    outline: none;
    padding: 0.8em;
    position: relative;
    text-align: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    color: white;
  }
`;

const Answer = styled.h2`
  font-size: 20px;
`;

const PostSidebar = styled.div`
  display: flex;
`;

const QuestionUser = styled.div`
  margin: 16px 0;
`;

const Tag = styled.li`
  font-size: 12px;
  color: #39739d;
  background-color: #e1ecf4;
  margin: 2px;
  padding: 4px 6px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }
`;

const TagBlock = styled.ul`
  display: flex;
  margin: 24px 0 12px 0;
`;

const PostText = styled.p`
  width: 100%;
  word-break: break-all;
  font-size: 15px;
  color: #232629;
`;

const AskedBlock = styled.div`
  margin-right: 16px;
`;

const VoteCount = styled.p`
  margin: 2px;
  font-size: 20px;
  color: #6a737c;
  text-align: center;
`;

const VoteButton = styled.button`
  margin: 2px;
`;

const PostRight = styled.div`
  flex-grow: 1;
  padding-right: 16px;
  width: 100%;
  max-width: 659px;
`;

const PostLeft = styled.div`
  padding-right: 16px;
`;

const Post = styled.div`
  display: flex;
  flex-grow: 1;
  border-bottom: 1px solid #e4e6e8;
`;

const DetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e4e6e8;
`;

const TitleSpan = styled.span`
  font-size: 23px;
  color: #3b4045;
  cursor: pointer;
`;

const TabletTitle = styled(TitleSpan)`
  font-size: 27px;
`;

const DetailTitle = styled.h1`
  order: 2;
  margin-bottom: 8px;
`;

const ButtonBlock = styled.div`
  order: 1;
  text-align: end;
`;

const HeaderButton = styled.button`
  padding: 10px;
  border: 1px solid #7fbfff;
  border-radius: 3px;
  background-color: #0a95ff;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }
`;

const DateBlock = styled.div`
  order: 3;
  display: flex;
  align-items: center;
`;

const DateSpan = styled.span`
  font-size: 11px;
  color: #232629;
`;

const TabletDateSpan = styled(DateSpan)`
  font-size: 13px;
`;

const GraySpan = styled(DateSpan)`
  margin-right: 2px;
  color: #6a737c;
`;

const TabletGraySpan = styled(GraySpan)`
  font-size: 13px;
`;

export default AnswerItem;
