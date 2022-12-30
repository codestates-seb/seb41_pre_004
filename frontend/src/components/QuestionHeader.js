import React from 'react';
import styled from 'styled-components';
import QuestionHeaderBtn from './QuestionHeaderBtn';
import { Mobile, Tablet, Desktop } from './Responsive';

<<<<<<< HEAD
function QuestionHeader() {
=======
function QuestionHeader({ tab }) {
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
  return (
    <>
      <Mobile>
        <TabletContainer>
<<<<<<< HEAD
          <MobileTitle>All Questions</MobileTitle>
=======
          <MobileTitle>{tab}</MobileTitle>
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
          <QuestionHeaderBtn></QuestionHeaderBtn>
        </TabletContainer>
      </Mobile>

      <Tablet>
        <TabletContainer>
<<<<<<< HEAD
          <QuestionTitle>All Questions</QuestionTitle>
=======
          <QuestionTitle>{tab}</QuestionTitle>
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
          <QuestionHeaderBtn></QuestionHeaderBtn>
        </TabletContainer>
      </Tablet>

      <Desktop>
        <QuestionContainer>
<<<<<<< HEAD
          <QuestionTitle>All Questions</QuestionTitle>
=======
          <QuestionTitle>{tab}</QuestionTitle>
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
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
