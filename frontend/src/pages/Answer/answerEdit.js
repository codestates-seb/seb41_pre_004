import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerEditorForm from '../../components/AnswerEditMarkdown';
import AnswerQuestionHeader from '../../components/AnswerQuestionHeader';
import Footer from '../../components/Footer';
import { ContainerWrapper, Container } from '../../styles/contentStyle';
import axios from 'axios';
import { useLocation, useNavigate,useParams } from 'react-router-dom';
const AskNotice = styled.div`
  width: 100%;
  max-width: 851px;
  background-color: #ecf5fb;
  margin-top: 16px;
  padding: 24px;
  border: 1px solid #a5ceed;
  border-radius: 3px;
  color: #3b4045;
  h2 {
    font-size: 21px;
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 15px;
    font-size: 15px;
  }
  h5 {
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: 700;
  }
  ol {
    margin-left: 30px;
  }
  li {
    font-size: 13px;
    margin-bottom: 4px;
    list-style: disc;
  }
`;

const AskTitle = styled.div`
  width: 100%;
  max-width: 851px;
  margin-top: 16px;
  padding: 24px;
  border: 1px solid #e4e6e8;
  border-radius: 3px;
  h2 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #0c0d0e;
    padding: 0 2px;
  }
  p {
    margin: 2px 0;
    padding: 0 2px;
    font-size: 12px;
    color: #3b4045;
  }
  input {
    width: 100%;
    border: 1px solid #dddfe1;
    border-radius: 3px;
    padding: 7px 9px;
    margin: 2px 0;
  }
`;
const AskTags = styled.div`
  width: 100%;
  max-width: 851px;
  padding: 24px;
  border: 1px solid #e4e6e8;
  border-radius: 3px;
  h2 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #0c0d0e;
    padding: 0 2px;
  }
  p {
    margin: 2px 0;
    padding: 0 2px;
    font-size: 12px;
    color: #3b4045;
  }
  input {
    width: 100%;
    border: 1px solid #dddfe1;
    border-radius: 3px;
    padding: 7px 9px;
    margin: 2px 0;
  }
`;

const LinkSpan = styled.span`
  color: #0173cc;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const AskContainer = styled(Container)`
  padding: 0 16px 24px 16px;
`;
const AskBtn = styled.div`
  button {
    background-color: #0a95ff;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    margin-top: 8px;
    outline: none;
    padding: 0.8em;
    position: relative;
    text-align: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    color: white;
  }
`;

function EditAnswer() {
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const Previoustext='안녕하세요';
  const question = useLocation().state;
  const answer = useParams()
  console.log(question,answer)
  function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const parse = JSON.parse(token);

    const header = {
      headers: {
        'Content-Type': `application/json`,
        authorization: parse.authorization,
      },
    };

    let data = JSON.stringify({
      content: answer,
    });

    axios
      .patch(
        `http://ec2-3-36-23-23.ap-northeast-2.compute.amazonaws.com:8080/questions/${question.questionId}/answers/${answer}`,
        data,
        header,
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.reload();
  }

  const handleSetTags = (event) => {
    let e = event.target.value;
    setTags(e);
  };

  return (
    <>
      <ContainerWrapper>
        <AskContainer>
          <AnswerQuestionHeader></AnswerQuestionHeader>

          <form onSubmit={handleSubmit}>

            <AnswerEditorForm setContent={setContent}  Previoustext={Previoustext}/>
            <AskTags>
              <div>
                <h2>Tags</h2>
                <p>
                  Add up to 5 tags describe what your question is about. Start
                  typing to see suggestions.
                </p>
              </div>
              <input
                value={tags}
                onChange={handleSetTags}
                type={'text'}
                placeholder={'e.g (excel string regex)'}
              ></input>
            </AskTags>
            <AskBtn>
              <button type="submit">Review your question</button>
            </AskBtn>
          </form>
        </AskContainer>
      </ContainerWrapper>
      <Footer />
    </>
  );
}

export default EditAnswer;
