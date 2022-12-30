//전체 질문목록 랜더링
import QuestionHeader from '../../components/QuestionHeader';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import {
  ContainerWrapper,
  ContainerFlex,
  Content,
  ContentBlock,
  SideBlock,
} from '../../styles/contentStyle';
import { Desktop } from '../../components/Responsive';
import QuestionList from '../../components/QuestionList';

function Questions({ questions }) {
  return (
    <>
      <ContainerWrapper>
        <ContainerFlex>
          <Navbar />
          <Content>
            <ContentBlock>
              <QuestionHeader tab={'All Questions'} />
              <QuestionList questions={questions} />
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
