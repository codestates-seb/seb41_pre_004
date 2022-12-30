import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import arrowUpIcon from '../../assets/icons/arrowUpIcon.png';
import arrowDownIcon from '../../assets/icons/arrowDownIcon.png';
import { Mobile, Tablet, Desktop } from '../../components/Responsive';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import QuestionDetailUser from '../../components/QuestionDetailUser';
import AnsMarkdown from '../../components/AnswerMarkdown';
import AnswerItem from '../../components/AnswerItem';
import axios from 'axios';

import {
  ContainerWrapper,
  ContainerFlex,
  MobileContent,
  DesktopContent,
  ContentBlock,
  DetailSideBlock,
} from '../../styles/contentStyle';
import { useEffect, useState } from 'react';

const QuestionDetail = ({ loginUserEmail }) => {
  const question = useLocation().state;
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState([]);

  const fetchData = async () => {
    await axios
      .get(
        `http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/questions/${question.questionId}/answers?page=1&size=10`,
      )
      .then((res) => setAnswers(res.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setAnswer]);

  function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const parse = JSON.parse(token);

    const header = {
      headers: {
        'Content-Type': `application/json`,
        authorization: parse.authorization,
      },
    };

    let data = JSON.stringify({
      content: answer,
    });

    axios
      .post(
        `http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/questions/${question.questionId}/answers`,
        data,
        header,
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // window.location.reload();
  }

  return (
    <>
      <ContainerWrapper>
        <ContainerFlex>
          <Navbar />
          <Mobile>
            <MobileContent>
              <ContentBlock>
                <DetailHeader>
                  <DetailTitle>
                    <TitleSpan>{question.title}</TitleSpan>
                  </DetailTitle>
                  <ButtonBlock>
                    <Link to={'/questions/ask'}>
                      <HeaderButton>Ask Question</HeaderButton>
                    </Link>
                  </ButtonBlock>
                  <DateBlock>
                    <AskedBlock>
                      <GraySpan>Asked</GraySpan>
                      <DateSpan>1 min ago</DateSpan>
                    </AskedBlock>
                    <AskedBlock>
                      <GraySpan>Modified</GraySpan>
                      <DateSpan>1 min ago</DateSpan>
                    </AskedBlock>
                    <div>
                      <GraySpan>Viewed</GraySpan>
                      <DateSpan>1 times</DateSpan>
                    </div>
                  </DateBlock>
                </DetailHeader>
                <Post>
                  <PostQuestion>
                    <PostLeft>
                      <VoteButton>
                        <img src={arrowUpIcon} alt="Vote Up" />
                      </VoteButton>
                      <VoteCount>0</VoteCount>
                      <VoteButton>
                        <img src={arrowDownIcon} alt="Vote Down" />
                      </VoteButton>
                    </PostLeft>
                    <TabletRight>
                      <PostText>{question.content}</PostText>
                      <TagBlock>
                        {/* {question.tags.map((tag, idx) => (
                        <Tag key={idx}>{tag}</Tag>
                      ))} */}
                      </TagBlock>
                      <QuestionUser>
                        <QuestionDetailUser
                          question={question}
                          loginUserEmail={loginUserEmail}
                        />
                      </QuestionUser>
                    </TabletRight>
                  </PostQuestion>
                  <PostAnswer>
                    {answers.map((el, idx) => {
                      return (
                        <AnswerItem
                          key={idx}
                          answer={el}
                          setAnswer={setAnswer}
                        />
                      );
                    })}
                    <Answer>Your Answer</Answer>
                    <form onSubmit={handleSubmit}>
                      <AnsMarkdown setAnswer={setAnswer} />
                      <AnswerBtn>
                        <button type="submit">Post your Answer</button>
                      </AnswerBtn>
                    </form>
                  </PostAnswer>
                </Post>
              </ContentBlock>
            </MobileContent>
          </Mobile>

          <Tablet>
            <MobileContent>
              <ContentBlock>
                <DetailHeader>
                  <DetailTitle>
                    <TabletTitle>{question.title}</TabletTitle>
                  </DetailTitle>
                  <ButtonBlock>
                    <Link to={'/questions/ask'}>
                      <HeaderButton>Ask Question</HeaderButton>
                    </Link>
                  </ButtonBlock>
                  <DateBlock>
                    <AskedBlock>
                      <TabletGraySpan>Asked</TabletGraySpan>
                      <TabletDateSpan>1 min ago</TabletDateSpan>
                    </AskedBlock>
                    <AskedBlock>
                      <TabletGraySpan>Modified</TabletGraySpan>
                      <TabletDateSpan>1 min ago</TabletDateSpan>
                    </AskedBlock>
                    <div>
                      <TabletGraySpan>Viewed</TabletGraySpan>
                      <TabletDateSpan>1 times</TabletDateSpan>
                    </div>
                  </DateBlock>
                </DetailHeader>
                <Post>
                  <PostQuestion>
                    <PostLeft>
                      <VoteButton>
                        <img src={arrowUpIcon} alt="Vote Up" />
                      </VoteButton>
                      <VoteCount>0</VoteCount>
                      <VoteButton>
                        <img src={arrowDownIcon} alt="Vote Down" />
                      </VoteButton>
                    </PostLeft>
                    <TabletRight>
                      <PostText>{question.content}</PostText>
                      <TagBlock>
                        {/* {question.tags.map((tag, idx) => (
                        <Tag key={idx}>{tag}</Tag>
                      ))} */}
                      </TagBlock>
                      <QuestionUser>
                        <QuestionDetailUser
                          question={question}
                          loginUserEmail={loginUserEmail}
                        />
                      </QuestionUser>
                    </TabletRight>
                  </PostQuestion>
                  <PostAnswer>
                    {answers.map((el, idx) => {
                      return (
                        <AnswerItem
                          key={idx}
                          answer={el}
                          setAnswer={setAnswer}
                        />
                      );
                    })}
                    <Answer>Your Answer</Answer>
                    <form onSubmit={handleSubmit}>
                      <AnsMarkdown setAnswer={setAnswer} />
                      <AnswerBtn>
                        <button type="submit">Post your Answer</button>
                      </AnswerBtn>
                    </form>
                  </PostAnswer>
                </Post>
              </ContentBlock>
            </MobileContent>
          </Tablet>

          <Desktop>
            <DesktopContent>
              <ContentBlock>
                <DetailHeader>
                  <DetailTitle>
                    <TabletTitle>{question.title}</TabletTitle>
                  </DetailTitle>
                  <ButtonBlock>
                    <Link to={'/questions/ask'}>
                      <HeaderButton>Ask Question</HeaderButton>
                    </Link>
                  </ButtonBlock>
                  <DateBlock>
                    <AskedBlock>
                      <TabletGraySpan>Asked</TabletGraySpan>
                      <TabletDateSpan>1 min ago</TabletDateSpan>
                    </AskedBlock>
                    <AskedBlock>
                      <TabletGraySpan>Modified</TabletGraySpan>
                      <TabletDateSpan>1 min ago</TabletDateSpan>
                    </AskedBlock>
                    <div>
                      <TabletGraySpan>Viewed</TabletGraySpan>
                      <TabletDateSpan>1 times</TabletDateSpan>
                    </div>
                  </DateBlock>
                </DetailHeader>
                <PostSidebar>
                  <Post>
                    <PostQuestion>
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
                        <TagBlock>
                          {/* {question.tags.map((tag, idx) => (
                          <Tag key={idx}>{tag}</Tag>
                        ))} */}
                        </TagBlock>
                        <QuestionUser>
                          <QuestionDetailUser
                            question={question}
                            loginUserEmail={loginUserEmail}
                          />
                        </QuestionUser>
                      </PostRight>
                    </PostQuestion>
                    <PostAnswer>
                      {answers.map((el, idx) => {
                        return (
                          <AnswerItem
                            key={idx}
                            answer={el}
                            setAnswer={setAnswer}
                          />
                        );
                      })}
                      <Answer>Your Answer</Answer>
                      <form onSubmit={handleSubmit}>
                        <AnsMarkdown setAnswer={setAnswer} />
                        <AnswerBtn>
                          <button type="submit">Post your Answer</button>
                        </AnswerBtn>
                      </form>
                    </PostAnswer>
                  </Post>
                  <DetailSideBlock>
                    <Sidebar />
                  </DetailSideBlock>
                </PostSidebar>
              </ContentBlock>
            </DesktopContent>
          </Desktop>
        </ContainerFlex>
      </ContainerWrapper>
      <Footer />
    </>
  );
};

const PostAnswer = styled.div``;

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

const PostQuestion = styled.div`
  display: flex;
  border-bottom: 1px solid #e4e6e8;
`;

const PostRight = styled.div`
  flex-grow: 1;
  padding-right: 16px;
`;

const TabletRight = styled(PostRight)`
  padding-right: 0;
`;

const PostLeft = styled.div`
  padding-right: 16px;
`;

const Post = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 727px;
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

export default QuestionDetail;
