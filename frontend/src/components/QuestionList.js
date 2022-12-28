import React from 'react';
import Questionitem from './QuestionItem';

function QuestionList({ homeData }) {
  return (
    <>
      {homeData.map((el) => {
        return <Questionitem question={el} key={el.id} />;
      })}
    </>
  );
}

export default QuestionList;
