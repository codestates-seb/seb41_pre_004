import React from 'react';
import Homeitem from './HomeItem';

function HomeList({ questions }) {
  return (
    <>
      {questions &&
        questions.map((question) => {
          return <Homeitem question={question} key={question.questionId} />;
        })}
    </>
  );
}

export default HomeList;
