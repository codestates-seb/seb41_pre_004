import React from 'react';
import Questionitem from './QuestionItem';

function QuestionList({ questions }) {
  return (
    <>
      {questions &&
        questions.map((question) => {
          return <Questionitem question={question} key={question.questionId} />;
        })}
    </>
  );
}

export default QuestionList;
