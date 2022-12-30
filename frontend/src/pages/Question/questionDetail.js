import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import arrowUpIcon from '../../assets/icons/arrowUpIcon.png';
import arrowDownIcon from '../../assets/icons/arrowDownIcon.png';
import { Mobile, Tablet, Desktop } from '../../components/Responsive';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import QuestionDetailUser from '../../components/QuestionDetailUser';
import {
  ContainerWrapper,
  ContainerFlex,
  MobileContent,
  DesktopContent,
  ContentBlock,
  DetailSideBlock,
} from '../../styles/contentStyle';

const QuestionDetail = ({ loginUserEmail }) => {
  const question = useLocation().state;

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

export default QuestionDetail;
