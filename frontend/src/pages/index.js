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

<<<<<<< HEAD
const Home = ({ homeData }) => {
=======
const Home = ({ questions }) => {
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
  return (
    <>
      <ContainerWrapper>
        <ContainerFlex>
          <Navbar />
          <Content>
            <ContentBlock>
<<<<<<< HEAD
              <QuestionHeader></QuestionHeader>
              <HomeList homeData={homeData} />
=======
              <QuestionHeader tab={'Top Questions'} />
              <HomeList questions={questions} />
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
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
