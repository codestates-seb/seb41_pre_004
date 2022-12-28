//전체 질문목록 랜더링
import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import QuestionList from '../../components/QuestionList';

function AllQuestions() {
  const [homeData, setHomeData] = useState();

  const fetchData = async () => {
    const res = await axios(`http://localhost:3005/question`);
    // const data = res;
    console.log(res.data);
    setHomeData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ContainerWrapper>
        <ContainerFlex>
          <Navbar />
          <Content>
            <ContentBlock>
              <QuestionHeader></QuestionHeader>
              <Questionitem></Questionitem>

              <QuestionList homeData={homeData} />
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
