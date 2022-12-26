//질문
import React from 'react';
import styled from 'styled-components';

const QuestionBox = styled.div`
  display: flex;

  padding: 16px;
  border-bottom: 1px solid gray;
`;
const QuestionInfo = styled.div`
  width: 108px;
  margin-right: 16px;
  margin-bottom: 4px;
  font-size: 13px;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  line-height: 17px;
  gap: 6px;
`;
const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const QuestionTitle = styled.div`
  display: flex;
  padding-right: 24px;
  margin-bottom: 4px;
  margin-top: -1px;
  color: #0074cc;
`;
const QuestionTagBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const QuestionTag = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const QuestionUserInfo = styled.div`
  display: flex;
`;
const QuestionTagUl = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  padding-left: 0px;
  margin-bottom: 13px;
  margin-top: 0px;
`;
const QuestionTaglist = styled.li`
  border: 1px solid black;
`;
function Questionitem() {
  return (
    <>
      <QuestionBox>
        <QuestionInfo>
          <div>0 votes</div>
          <div>0 answers</div>
          <div>0 views</div>
        </QuestionInfo>
        <QuestionContent>
          <QuestionTitle>
            Raise an Event within an Excel-Addin when a Userform is loaded by
            the Excel Application or other Addin
          </QuestionTitle>
          <QuestionTagBox>
            <QuestionTag>
              <QuestionTagUl>
                <QuestionTaglist>java</QuestionTaglist>
                <QuestionTaglist>react</QuestionTaglist>
                <QuestionTaglist>javascript</QuestionTaglist>
              </QuestionTagUl>
            </QuestionTag>

            <QuestionUserInfo>유저 정보와 시간</QuestionUserInfo>
          </QuestionTagBox>
        </QuestionContent>
      </QuestionBox>
    </>
  );
}

export default Questionitem;
