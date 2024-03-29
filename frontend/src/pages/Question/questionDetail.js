import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import arrowUpIcon from '../../assets/icons/arrowUpIcon.png';
import arrowDownIcon from '../../assets/icons/arrowDownIcon.png';
import { Mobile, Tablet, Desktop } from '../../components/Responsive';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import QuestionDetailUser from '../../components/QuestionDetailUser';
import AnsMarkdown from '../../components/AnswerMarkdown';
import AnswerList from '../../components/AnswerList';
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

const QuestionDetail = () => {
  const questionId = useParams().questionId;

  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState('');

  const fetchData = async () => {
    await axios
      .get(
        `http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}`,
      )
      .then((res) => setQuestion(res.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      .catch(function (error) {
        alert('로그인 후 이용바랍니다.');
      });

    window.location.reload();
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
                    <AskedBlock>
                      <GraySpan>Viewed</GraySpan>
                      <DateSpan>1 times</DateSpan>
                    </AskedBlock>
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
                      <PostText
                        dangerouslySetInnerHTML={{ __html: question.content }}
                      />
                      <QuestionUser>
                        <QuestionDetailUser question={question} />
                      </QuestionUser>
                    </TabletRight>
                  </PostQuestion>
                  <PostAnswer>
                    <AnswerCount>1 Answers</AnswerCount>
                    <AnswerList
                      question={question}
                      answers={question.answers}
                    />
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
                    <AskedBlock>
                      <TabletGraySpan>Viewed</TabletGraySpan>
                      <TabletDateSpan>1 times</TabletDateSpan>
                    </AskedBlock>
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
                      <PostText
                        dangerouslySetInnerHTML={{ __html: question.content }}
                      />
                      <QuestionUser>
                        <QuestionDetailUser question={question} />
                      </QuestionUser>
                    </TabletRight>
                  </PostQuestion>
                  <PostAnswer>
                    <TabletCount>1 Answers</TabletCount>
                    <AnswerList
                      question={question}
                      answers={question.answers}
                    />
                    <TabletAnswer>Your Answer</TabletAnswer>
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
                    <AskedBlock>
                      <TabletGraySpan>Viewed</TabletGraySpan>
                      <TabletDateSpan>1 times</TabletDateSpan>
                    </AskedBlock>
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
                        <PostText
                          dangerouslySetInnerHTML={{ __html: question.content }}
                        />
                        <QuestionUser>
                          <QuestionDetailUser question={question} />
                        </QuestionUser>
                      </PostRight>
                    </PostQuestion>
                    <PostAnswer>
                      <TabletCount>1 Answers</TabletCount>
                      <AnswerList
                        question={question}
                        answers={question.answers}
                      />
                      <TabletAnswer>Your Answer</TabletAnswer>
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

const AnswerCount = styled.div`
  padding: 16px 0;
  font-size: 16px;
  color: #232629;
`;

const TabletCount = styled(AnswerCount)`
  font-size: 19px;
`;

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
  padding: 16px 0;
  font-size: 16px;
  color: #232629;
  border-top: 1px solid #e4e6e8;
`;

const TabletAnswer = styled(Answer)`
  font-size: 19px;
`;

const PostSidebar = styled.div`
  display: flex;
`;

const QuestionUser = styled.div`
  margin: 16px 0;
`;

const PostText = styled.p`
  width: 100%;
  min-height: 150px;
  padding-top: 10px;
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
  flex-wrap: wrap;
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
