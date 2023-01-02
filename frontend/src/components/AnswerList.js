import React from 'react';
import Answeritem from './AnswerItem';

function AnswerList({ question }) {
  return (
    <>
      {question.answers &&
        question.answers.map((answer, idx) => {
          return <Answeritem key={idx} answer={answer} question={question} />;
        })}
    </>
  );
}

export default AnswerList;
