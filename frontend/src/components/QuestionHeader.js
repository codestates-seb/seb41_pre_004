import React from 'react';
import styled from 'styled-components';
import QuestionHeaderBtn from './QuestionHeaderBtn';

function QuestionHeader() {
  return (
    <>
      <QuestionContainer>
        <QuestionTitle>All Questions</QuestionTitle>
        <QuestionHeaderBtn></QuestionHeaderBtn>
      </QuestionContainer>
    </>
  );
}

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 12px 24px;
`;

const QuestionTitle = styled.h1`
  font-size: 27px;
  color: #232629;
  font-weight: 700;
`;

export default QuestionHeader;
