import React from 'react';
import styled from 'styled-components';
import { Desktop, Mobile, Tablet } from './Responsive';

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

function AskQuestionHeader() {
  return (
    <>
      <Desktop>
        <AskHeader>
          <AskText>Ask a public question</AskText>
        </AskHeader>
      </Desktop>
      <Tablet>
        <TabletHeader>
          <AskText>Ask a public question</AskText>
        </TabletHeader>
      </Tablet>
      <Mobile>
        <TabletHeader>
          <MobileText>Ask a public question</MobileText>
        </TabletHeader>
      </Mobile>
    </>
  );
}

export default AskQuestionHeader;
