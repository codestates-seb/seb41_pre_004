//전체 질문목록 랜더링
import QuestionHeader from '../../components/QuestionHeader';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
<<<<<<< HEAD

=======
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
import {
  ContainerWrapper,
  ContainerFlex,
  Content,
  ContentBlock,
  SideBlock,
} from '../../styles/contentStyle';
import { Desktop } from '../../components/Responsive';
import QuestionList from '../../components/QuestionList';

<<<<<<< HEAD
function Questions({ homeData }) {
=======
function Questions({ questions }) {
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
              <QuestionList homeData={homeData} />
=======
              <QuestionHeader tab={'All Questions'} />
              <QuestionList questions={questions} />
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
}

export default Questions;
