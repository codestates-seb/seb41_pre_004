import QuestionHeader from '../components/QuestionHeader';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import {
  ContainerWrapper,
  ContainerFlex,
  Content,
  ContentBlock,
  SideBlock,
} from '../styles/contentStyle';
import { Desktop } from '../components/Responsive';
import HomeList from '../components/HomeList';

const Home = ({ homeData }) => {
  return (
    <>
      <ContainerWrapper>
        <ContainerFlex>
          <Navbar />
          <Content>
            <ContentBlock>
              <QuestionHeader></QuestionHeader>
              <HomeList homeData={homeData} />
            </ContentBlock>
            <Desktop>
              <SideBlock>
                <Sidebar />
              </SideBlock>
            </Desktop>
          </Content>
        </ContainerFlex>
      </ContainerWrapper>
      <Footer />
    </>
  );
};

export default Home;
