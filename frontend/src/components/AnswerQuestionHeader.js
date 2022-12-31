import React from 'react';
import styled from 'styled-components';
import { Desktop, Mobile, Tablet } from './Responsive';

function AnswerQuestionHeader() {
  return (
    <>
      <Desktop>
        <AskHeader>
          <AskText>Answer</AskText>
        </AskHeader>
      </Desktop>
      <Tablet>
        <TabletHeader>
          <AskText>Answer</AskText>
        </TabletHeader>
      </Tablet>
      <Mobile>
        <TabletHeader>
          <MobileText>Answer</MobileText>
        </TabletHeader>
      </Mobile>
    </>
  );
}

const AskHeader = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368);
  background-position: right top;
  background-repeat: no-repeat;
  background-size: contain;
`;

const TabletHeader = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
`;

const AskText = styled.h1`
  margin: 24px 0 27px 0;
  font-size: 27px;
  font-weight: 700;
  color: #232629;
`;

const MobileText = styled(AskText)`
  font-size: 21px;
`;

export default AnswerQuestionHeader;
