//회원은 새로운 게시글을 작성할 수 있다. 게시글 작성

import React from 'react';
import styled from 'styled-components';

const AskNotice = styled.div`
  background-color: rgb(235, 244, 251);
  width: 850px;
  height: 270px;
  padding: 30px;
  border: 1px solid rgb(166, 206, 237);
  border-radius: 3px;

  h2 {
    font-size: 21px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  p {
    margin-bottom: 5px;
    font-size: 15px;
  }

  h5 {
    font-size: 15px;
    margin: 20px 0px 8px;
    font-weight: bold;
  }

  li {
    font-size: 13px;
    margin-bottom: 4px;
  }
`;

function AskQuestionList() {
  return (
    <>
      <AskNotice>
        <h2>Writing a good question</h2>
        <p>
          You’re ready to
          <a href="/">ask</a>a programming-related question and this form will
          help guide you through the process.
        </p>
        <p>
          Looking to ask a non-programming question? See the topics here to find
          a relevant site.
        </p>
        <h5>Steps</h5>
        <li>Summarize your problem in a one-line title.</li>
        <li>Describe your problem in more detail.</li>
        <li>Describe what you tried and what you expected to happen.</li>
        <li>
          Add “tags” which help surface your question to members of the
          community.
        </li>
        <li>Review your question and post it to the site.</li>
      </AskNotice>
    </>
  );
}

export default AskQuestionList;
