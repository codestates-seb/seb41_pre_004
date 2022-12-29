import React from 'react';
import styled from 'styled-components';
import QuestionHeaderBtn from './QuestionHeaderBtn';
import { Mobile, Tablet, Desktop } from './Responsive';

function QuestionHeader() {
  return (
    <>
      <Mobile>
        <TabletContainer>
          <MobileTitle>All Questions</MobileTitle>
          <QuestionHeaderBtn></QuestionHeaderBtn>
        </TabletContainer>
      </Mobile>

      <Tablet>
        <TabletContainer>
          <QuestionTitle>All Questions</QuestionTitle>
          <QuestionHeaderBtn></QuestionHeaderBtn>
        </TabletContainer>
      </Tablet>

      <Desktop>
        <QuestionContainer>
          <QuestionTitle>All Questions</QuestionTitle>
          <QuestionHeaderBtn></QuestionHeaderBtn>
        </QuestionContainer>
      </Desktop>
    </>
  );
}

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 12px 24px;
`;

const TabletContainer = styled(QuestionContainer)`
  padding: 24px 16px;
`;

const QuestionTitle = styled.h1`
  font-size: 27px;
  color: #232629;
`;

const MobileTitle = styled(QuestionTitle)`
  font-size: 22px;
`;

export default QuestionHeader;
