//회원은 새로운 게시글을 작성할 수 있다. 게시글 작성

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TestEditorForm from '../../components/AskMarkdown';
import AskQuestionHeader from '../../components/AskQuestionHeader';
import AskSubmitBtn from '../../components/SubmitQuestionBtn';
import axios from 'axios';

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

const AskTitle = styled.div`
  margin-top: 16px;
  width: 850px;
  padding: 24px;
  border: 1px solid gray;

  h2 {
    font-size: 15px;
    font-weight: bolder;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: rgb(59, 64, 69);
  }

  input {
    width: 730px;
    height: 40px;
    border: 1px solid rgb(186, 191, 196);
    border-radius: 3px;
    padding-left: 8px;
  }
`;
const AskTags = styled.div`
  width: 850px;
  padding: 24px;
  border: 1px solid gray;

  h2 {
    font-size: 15px;
    font-weight: bolder;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: rgb(59, 64, 69);
  }

  input {
    width: 730px;
    height: 40px;
    border: 1px solid rgb(186, 191, 196);
    border-radius: 3px;
    padding-left: 8px;
  }
`;

function AskQuestionList() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/title`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        tags: tags,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('post 완료!');
      }
    });
  }
  const handleSetTitle = (event) => {
    let e = event.target.value;
    setTitle(e);
  };
  const handleSetTags = (event) => {
    let e = event.target.value;
    setTags(e);
  };

  // const [ques, setQues] = useState(null);

  // const fetchData = async () => {
  //   const response = await axios.get(`http://localhost:3001/title`);
  //   setQues(response.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const title = e.target.title.value;
  //   const tags = e.target.tags.value;
  //   axios.post(`http://localhost:3001/title`, { title, tags });
  //   fetchData();
  // };

  return (
    <>
      <AskQuestionHeader></AskQuestionHeader>
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
      <AskTitle>
        <div>
          <h2>Title</h2>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
        </div>
        <input
          value={title}
          onChange={handleSetTitle}
          type={'text'}
          placeholder={'e.g (excel string regex)'}
        ></input>
      </AskTitle>
      <TestEditorForm></TestEditorForm>
      <AskTags>
        <div>
          <h2>Tags</h2>
          <p>
            Add up to 5 tags describe what your question is about. Start typing
            to see suggestions.
          </p>
        </div>
        <input
          value={tags}
          onChange={handleSetTags}
          type={'text'}
          placeholder={'e.g (excel string regex)'}
        ></input>
      </AskTags>
      <button onClick={handleSubmit}>sdfsdfsdfsdfsdfsd</button>
    </>
  );
}

export default AskQuestionList;
