import React from 'react';
import Questionitem from './QuestionItem';

function AnswerList({ questions }) {
  return (
    <>
      {questions.map((question) => {
        return <Questionitem question={question} key={question.questionId} />;
      })}
    </>
  );
}

export default AnswerList;
