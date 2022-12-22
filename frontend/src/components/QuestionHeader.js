import React from 'react';
import styled from 'styled-components';
import QuestionHeaderBtn from './QuestionHeaderBtn';

const QuestionContainer = styled.div`
  border: 1px solid gray;
  font-size: 27px;
  width: 727px;
  height: 100px;

  display: flex;
  justify-content: space-between;
`;

function QuestionHeader() {
  return (
    <>
      <QuestionContainer>
        <div>All question</div>
        <QuestionHeaderBtn></QuestionHeaderBtn>
      </QuestionContainer>
    </>
  );
}

export default QuestionHeader;
