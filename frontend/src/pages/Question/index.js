//전체 질문목록 랜더링
import React from 'react';
import QuestionHeader from '../../components/QuestionHeader';
import Questionitem from '../../components/QuestionItem';
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

function AllQuestions({ questions }) {
  return (
    <>
      <ContainerWrapper>
        <ContainerFlex>
          <Navbar />
          <Content>
            <ContentBlock>
              <QuestionHeader />
              {questions.map((question) => {
                return <Questionitem question={question} />;
              })}
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

export default AllQuestions;
