import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const QuestionBtn = styled.button`
  padding: 10px;
  border: 1px solid #7fbfff;
  border-radius: 3px;
  background-color: #0995fd;
  color: white;
  cursor: pointer;
  text-align: center;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;

function QuestionHeaderBtn() {
  return (
    <Link to={'/questions/ask'}>
      <QuestionBtn>Ask Question</QuestionBtn>
    </Link>
  );
}

export default QuestionHeaderBtn;
