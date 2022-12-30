import React from 'react';
import Questionitem from './QuestionItem';

function QuestionList({ questions }) {
  return (
    <>
<<<<<<< HEAD
      {homeData.map((el) => {
        return <Questionitem question={el} key={el.questionId} />;
=======
      {questions.map((question) => {
        return <Questionitem question={question} key={question.questionId} />;
>>>>>>> 3fc5466e3f833869c19ac071b2ff4aa8f5a6a16c
      })}
    </>
  );
}

export default QuestionList;
