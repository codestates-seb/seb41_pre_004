import React from 'react';
import styled from 'styled-components';
import QuestionHeaderBtn from './QuestionHeaderBtn';

function DetailHeader() {
  return (
    <>
      <div>
        <DetailQTitle>
          <h1>Question Title</h1>
          <QuestionHeaderBtn></QuestionHeaderBtn>
        </DetailQTitle>
        <DetailSection>
          <div>
            <span>Asked</span>
            <span>3 days ago</span>
          </div>
          <div>
            <span>Modified</span>
            <span>1 days ago</span>
          </div>
          <div>
            <span>Viwed</span>
            <span>1times</span>
          </div>
        </DetailSection>
      </div>
    </>
  );
}

const DetailQTitle = styled.header`
  font-size: 27px;
  width: 1060px;
  height: 47px;
  display: flex;
  justify-content: space-between;

  h1 {
    display: flex;
    font-size: 27px;
    font-weight: normal;
    margin-right: 8px;
    margin-bottom: 8px;
    height: auto;
    word-break: break-all;
  }
`;

const DetailSection = styled.section`
  display: flex;
  width: 1060px;
  padding-bottom: 8px;
  border-bottom: 1px solid gray;
  margin-bottom: 16px;

  div {
    height: 17px;
    margin: 0px 16px 8px 0px;
    font-weight: 500;
  }

  span {
    font-size: 13px;
    color: var(--fc-light);
    margin-right: 2px;
    font-weight: inherit;
  }
`;

export default DetailHeader;
