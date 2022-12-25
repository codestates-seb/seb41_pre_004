import React from 'react';
import styled from 'styled-components';

const QuestionBtn = styled.button`
  width: 103px;
  height: 37px;
  border: 1px solid black;
  background-color: #0a95ff;
  color: white;
  cursor: pointer;
  text-align: center;
  transition: 0.5s;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
`;

function QuestionHeaderBtn() {
  return (
    <>
      <QuestionBtn>Ask question</QuestionBtn>
    </>
  );
}

export default QuestionHeaderBtn;
