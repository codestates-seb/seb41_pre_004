//전체 질문목록 랜더링
import React from 'react';
import styled from 'styled-components';
import QuestionHeader from '../../components/QuestionHeader';
import Questionitem from '../../components/QuestionItem';

const Allrender = styled.main`
  main {
  }
`;

function AllQuestion() {
  return (
    <>
      <Allrender>
        <main>
          <QuestionHeader></QuestionHeader>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
          <Questionitem></Questionitem>
        </main>
      </Allrender>
    </>
  );
}

export default AllQuestion;
