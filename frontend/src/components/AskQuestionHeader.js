import React from 'react';
import styled from 'styled-components';

const AskHeader = styled.div`
  border: 1px solid gray;
  width: 1216px;
  height: 130px;
  display: flex;
`;
const AskText = styled.div`
  text-align: center;
  width: 330px;
  font-size: 27px;
  font-weight: bolder;
  margin-left: -16.5px;
  padding: 40px 30px 30px 0px;
`;
const AskImg = styled.div`
  background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368);
  width: 780px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: right top;
`;

function AskQuestionHeader() {
  return (
    <>
      <AskHeader>
        <AskText>Ask a public question</AskText>
        <AskImg></AskImg>
      </AskHeader>
    </>
  );
}

export default AskQuestionHeader;
