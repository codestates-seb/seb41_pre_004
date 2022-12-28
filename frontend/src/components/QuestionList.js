import React from 'react';
import Questionitem from './QuestionItem';

function QuestionList({ questions }) {
  return (
    <>
      {questions.map((question) => {
        return <Questionitem question={question} key={question.id} />;
      })}
    </>
  );
}

export default QuestionList;
