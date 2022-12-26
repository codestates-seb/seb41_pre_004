//전체 질문리스트를 렌더링하는 박스

import React from 'react';
import QuestionHeader from './QuestionHeader';
import Questionitem from './QuestionItem';

function QuestionList() {
  return (
    <>
      <div>
        <QuestionHeader></QuestionHeader>
        <Questionitem></Questionitem>
      </div>
    </>
  );
}

export default QuestionList;
