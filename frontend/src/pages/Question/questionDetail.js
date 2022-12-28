import { useParams } from 'react-router';
import styled from 'styled-components';
import { Mobile, Tablet, Desktop } from '../../components/Responsive';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import {
  ContainerWrapper,
  ContainerFlex,
  MobileContent,
  DesktopContent,
  ContentBlock,
  SideBlock,
} from '../../styles/contentStyle';

const questions = [
  {
    id: 1,
    title: 'stackoverflow',
    content:
      'clone coding is clone coding is clone coding is clone coding is clone coding is clone coding is clone coding is clone coding is clone coding is clone coding is',
    tags: ['java', 'javascript'],
  },
  {
    id: 2,
    title: 'hello world',
    content:
      'hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world',
    tags: ['hello', 'world'],
  },
];

const QuestionDetail = () => {
  const params = useParams();

  return (
    <>
      <ContainerWrapper>
        <ContainerFlex>
          <Navbar />
          <Mobile>
            <MobileContent>
              <ContentBlock>
                <DetailHeader>
                  <DetailTitle>title</DetailTitle>
                  <ButtonBlock>
                    <HeaderButton>Ask Question</HeaderButton>
                  </ButtonBlock>
                  <DateBlock>
                    <div>
                      <GraySpan>Asked</GraySpan>
                      <DateSpan>1 min ago</DateSpan>
                    </div>
                    <div>
                      <GraySpan>Modified</GraySpan>
                      <DateSpan>1 min ago</DateSpan>
                    </div>
                  </DateBlock>
                </DetailHeader>
                <Post>
                  <PostLeft></PostLeft>
                  <PostRight></PostRight>
                </Post>
              </ContentBlock>
            </MobileContent>
          </Mobile>

          <Tablet>
            <MobileContent>
              <ContentBlock>
                <DetailTitle>title</DetailTitle>
              </ContentBlock>
            </MobileContent>
          </Tablet>

          <Desktop>
            <DesktopContent>
              <ContentBlock>
                <DetailTitle>title</DetailTitle>
              </ContentBlock>
              <SideBlock>
                <Sidebar />
              </SideBlock>
            </DesktopContent>
          </Desktop>
        </ContainerFlex>
      </ContainerWrapper>
      <Footer />
    </>
  );
};

const PostRight = styled.div`
  padding-right: 16px;
`;

const PostLeft = styled.div`
  padding-right: 16px;
`;

const Post = styled.div`
  display: flex;
`;

const DetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e4e6e8;
`;

const DetailTitle = styled.h1`
  order: 2;
  margin-bottom: 8px;
  font-size: 23px;
  color: #3b4045;
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

const GraySpan = styled(DateSpan)`
  margin-right: 2px;
  color: #6a737c;
`;
export default QuestionDetail;
