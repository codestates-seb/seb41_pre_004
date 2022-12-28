import React from 'react';
import Questionitem from './QuestionItem';

function QuestionList({ homeData }) {
  return (
    <>
      {homeData.map((data) => {
        return <Questionitem question={data} key={data.id} />;
      })}
    </>
  );
}

export default QuestionList;
